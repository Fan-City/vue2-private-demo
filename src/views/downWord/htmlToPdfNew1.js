/* eslint-disable */
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/*
 * 使用说明
 * ele:需要导出pdf的容器元素(dom节点 不是id)
 * pdfFileName: 导出文件的名字 通过调用outPutPdfFn方法也可传参数改变
 * splitClassName: 避免分段截断的类名 当pdf有多页时需要传入此参数 , 避免pdf分页时截断元素  如表格<tr class="itemClass"></tr>
 * outPutPdfFn切割补充 还有问题
 * */
class PdfLoader {
  constructor(ele, pdfFileName, splitClassName) {
    this.ele = ele;
    this.pdfFileName = pdfFileName;
    this.splitClassName = splitClassName;
    this.A4_WIDTH = 595;
    this.A4_HEIGHT = 842;
  }

  async getPDF() {
    let ele = this.ele;
    let pdfFileName = this.pdfFileName;
    let eleW = ele.offsetWidth; // 获得该容器的宽
    let eleH = ele.scrollHeight; // 获得该容器的高
    let eleOffsetTop = ele.offsetTop; // 获得该容器到文档顶部的距离
    let eleOffsetLeft = ele.offsetLeft; // 获得该容器到文档最左的距离
    let canvas = document.createElement("canvas");
    let abs = 0;
    let win_in =
      document.documentElement.clientWidth || document.body.clientWidth; // 获得当前可视窗口的宽度（不包含滚动条）
    let win_out = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）
    if (win_out > win_in) {
      abs = (win_out - win_in) / 2; // 获得滚动条宽度的一半
    }
    canvas.width = eleW * 2; // 将画布宽&&高放大两倍
    canvas.height = eleH * 2;
    let context = canvas.getContext("2d");
    context.scale(3, 3); // 增强图片清晰度
    context.translate(-eleOffsetLeft - abs, -eleOffsetTop);
    html2canvas(ele, {
      useCORS: true, //允许canvas画布内可以跨域请求外部链接图片, 允许跨域请求。
    }).then(async (canvas) => {
      // debugger
      let contentWidth = canvas.width;
      let contentHeight = canvas.height;
      //一页pdf显示html页面生成的canvas高度;
      let pageHeight = (contentWidth / this.A4_WIDTH) * this.A4_HEIGHT; // 这样写的目的在于保持宽高比例一致 pageHeight/canvas.width = a4纸高度/a4纸宽度// 宽度和canvas.width保持一致
      //未生成pdf的html页面高度
      let leftHeight = contentHeight;
      //页面偏移
      let position = 30;
      //a4纸的尺寸[595,842],单位像素，html页面生成的canvas在pdf中图片的宽高
      let imgWidth = this.A4_WIDTH - 60; //-60为了页面有左右边距  是一边30
      let imgHeight = (this.A4_WIDTH / contentWidth) * contentHeight;
      let pageData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = jsPDF("", "pt", "a4");
      // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      // 当内容未超过pdf一页显示的范围，无需分页

      if (leftHeight < pageHeight) {
        //在pdf.addImage(pageData, 'JPEG', 左20，上，宽度，高度)设置在pdf中显示；
        pdf.addImage(pageData, "JPEG", 30, 20, imgWidth, imgHeight);
        // pdf.addImage(pageData, 'JPEG', 20, 40, imgWidth, imgHeight);
      } else {
        // 分页
        while (leftHeight > 0) {
          pdf.addImage(pageData, "JPEG", 30, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= this.A4_HEIGHT;
          //避免添加空白页
          if (leftHeight > 0) {
            pdf.addPage();
          }
        }
      }
      pdf.save(pdfFileName + ".pdf", { returnPromise: true }).then(() => {
        //去除添加的空div 防止页面混乱
        let doms = document.querySelectorAll(".emptyDiv");
        for (let i = 0; i < doms.length; i++) {
          doms[i].remove();
        }
      });
      this.ele.style.height = "";
    });
  }


  // TODO: use
  isSplit(nodes, index, pageHeight) {
    if (
      nodes[index].offsetTop + nodes[index].offsetHeight < pageHeight &&
      nodes[index + 1] &&
      nodes[index + 1].offsetTop + nodes[index + 1].offsetHeight > pageHeight
    ) {
      return true;
    }
    return false;
  }
  // TODO: 完善
  async outPutPdfFn(pdfFileName) {
    return new Promise((resolve, reject) => {
      this.ele.style.height = "initial";
      pdfFileName ? (this.pdfFileName = pdfFileName) : null;
      let target = this.ele;
      let pageHeight = (target.scrollWidth / this.A4_WIDTH) * this.A4_HEIGHT;
      // 获取分割dom，此处为class类名为item的dom
      let domList = document.getElementsByClassName(this.splitClassName);
      // 进行分割操作，当dom内容已超出a4的高度，则将该dom前插入一个空dom，把他挤下去，分割
      let pageNum = 1; //pdf页数
      let eleBounding = this.ele.getBoundingClientRect();
      for (let i = 0; i < domList.length; i++) {
        let node = domList[i];
        let bound = node.getBoundingClientRect();
        let offset2Ele = bound.top - eleBounding.top;
        let currentPage = Math.ceil(
          (bound.bottom - eleBounding.top) / pageHeight
        ); //当前元素应该在哪一页
        if (pageNum < currentPage) {
          pageNum++;
          let divParent = domList[i].parentNode; // 获取该div的父节点
          let newNode = document.createElement("div");
          newNode.className = "emptyDiv";
          newNode.style.background = "white";
          newNode.style.height = pageHeight * (pageNum - 1) - offset2Ele + 30 + "px"; //+30为了在换下一页时有顶部的边距
          newNode.style.width = "100%";
          let next = domList[i].nextSibling; // 获取div的下一个兄弟节点
          // 判断兄弟节点是否存在
          if (next) {
            // 存在则将新节点插入到div的下一个兄弟节点之前，即div之后
            divParent.insertBefore(newNode, node);
          } else {
            // 不存在则直接添加到最后,appendChild默认添加到divParent的最后
            divParent.appendChild(newNode);
          }
        }
      }
      // 异步函数  再调用保存为pdf的函数
      this.getPDF(resolve, reject)
    });
  }
}

export default PdfLoader;
