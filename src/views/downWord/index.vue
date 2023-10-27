<template>
  <div class="downword-page">
    <div class="download" @click="todown">下载</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-2">{{ text2 }}</div>

    <div ref="myEcharts" id="myEcharts" class="downword-page-myEcharts"></div>
  </div>
</template>

<script>
// import data from "./data.json";
import echarts from "echarts";
import JSZipUtils from "jszip-utils";
import docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import PizZip from "pizzip";

export default {
  name: "downwords",
  data() {
    return {
      text1: "测试关系图标题1",
      text2: "测试关系图标题2",
      // echartData: data,
      myEcharts1: null,
      myEcharts2: null,
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      this.myEcharts = echarts.init(document.getElementById("myEcharts"));
      let option = {
        backgroundColor: "#1a4377",
        tooltip: {},
        /* legend: [{
        tooltip: {
          show: true
        },
        selectedMode: 'true',
        bottom: 20,
        // data: ['招标倾向性', '装饰装修项目', '房建项目', '园林绿化项目', '其他项目', '市政项目', '园林绿化项目']
      }], */
        animationDuration: 1000,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "",
            type: "graph",
            layout: "force",
            edgeSymbol: ["none", "arrow"],
            // draggable: false,
            zoom: 1,
            roam: false,
            itemStyle: {
              normal: {
                borderWidth: 2,
              },
            },
            force: {
              repulsion: 300,
              edgeLength: 50,
              layoutAnimation: false,
            },
            data: [
              {
                id: 0,
                name: "招标倾向性",
                // "x": 0,
                // y: 0,
                symbolSize: [60, 60],
                category: "父节点",
                value: 200,
                itemStyle: {
                  normal: {
                    color: "rgba(250, 200, 88, 1)",
                    borderColor: "#f3aa06",
                  },
                },
                label: {
                  textBorderColor: "rgba(250, 200, 88, 1)",
                },
              },
              {
                id: 1,
                name: "房建项目",
                value: 25,
                symbolSize: 40,
                category: "项目类型",
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 2,
                name: "市政项目",
                symbolSize: 32,
                category: "项目类型",
                value: 15,
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 3,
                name: "装饰装修项目",
                symbolSize: 40,
                category: "项目类型",
                value: 15,
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 4,
                name: "园林绿化项目",
                symbolSize: 40,
                category: "项目类型",
                value: 15,
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 5,
                name: "其他项目",
                symbolSize: 40,
                category: "项目类型",
                value: 15,
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 6,
                name: "定性评审法",
                symbolSize: 53,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 7,
                name: "抽签定标法",
                symbolSize: 26,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 8,
                name: "其他",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 9,
                name: "综合评估法",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 10,
                name: "综合定性评审法",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 11,
                name: "抽签定标法",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 12,
                name: "低价法",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 13,
                name: "抽签定标法",
                symbolSize: 26,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 14,
                name: "票决抽签",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 15,
                name: "直接票决",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 16,
                name: "逐轮票决",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 17,
                name: "直接定标",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 18,
                name: "随机抽取",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 19,
                name: "先评后抽",
                symbolSize: 26,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 20,
                name: "集体议事法",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 21,
                name: "价格法",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 22,
                name: "价格竞争法",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 23,
                name: "价格偏离法",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 24,
                name: "其他",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 25,
                name: "特级",
                symbolSize: 45,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
              {
                id: 26,
                name: "一级",
                symbolSize: 30,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
              {
                id: 27,
                name: "二级",
                symbolSize: 25,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
              {
                id: 28,
                name: "三级",
                symbolSize: 20,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
              {
                id: 29,
                name: "其他",
                symbolSize: 45,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
            ],
            links: [
              {
                source: "0",
                target: "1",
              },
              {
                source: "0",
                target: "2",
              },
              {
                source: "0",
                target: "3",
              },
              {
                source: "0",
                target: "4",
              },
              {
                source: "0",
                target: "5",
              },
              {
                source: "1",
                target: "6",
              },
              {
                source: "1",
                target: "7",
              },
              {
                source: "1",
                target: "8",
              },
              {
                source: "2",
                target: "9",
              },
              {
                source: "2",
                target: "10",
              },
              {
                source: "2",
                target: "11",
              },
              {
                source: "3",
                target: "12",
              },
              {
                source: "6",
                target: "13",
              },
              {
                source: "6",
                target: "14",
              },
              {
                source: "6",
                target: "15",
              },
              {
                source: "7",
                target: "16",
              },
              {
                source: "7",
                target: "17",
              },
              {
                source: "8",
                target: "18",
              },
              {
                source: "9",
                target: "19",
              },
              {
                source: "9",
                target: "20",
              },
              {
                source: "10",
                target: "21",
              },
              {
                source: "10",
                target: "22",
              },
              {
                source: "11",
                target: "23",
              },
              {
                source: "12",
                target: "24",
              },
              {
                source: "14",
                target: "25",
              },
              {
                source: "14",
                target: "26",
              },
              {
                source: "14",
                target: "27",
              },
              {
                source: "14",
                target: "28",
              },
              {
                source: "14",
                target: "29",
              },
            ],
            categories: [
              {
                name: "项目类型",
              },
              {
                name: "评标办法",
              },
              {
                name: "父节点",
              },
              {
                name: "定标办法",
              },
              {
                name: "中标企业",
              },
            ],
            focusNodeAdjacency: true,
            edgeLabel: {
              normal: {
                show: true,
                formatter: function (x) {
                  return x.data.name;
                },
              },
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                color: "#fff",
                textBorderWidth: 1,
              },
            },
            lineStyle: {
              normal: {
                color: "source",
                curveness: 0,
                type: "solid",
              },
            },
          },
        ],
      };
      this.myEcharts.setOption(option);
    },
    // 下载word
    todown() {
      let _this = this;
      // 同名 ref 取多个，可以为后续 多图标取所有做准备， 其他不同名也行，方法稍微改动，根据实际需求情况吧
      let imgUrl = this.myEcharts.getDataURL({
        pixelRatio: 2,
        backgroundColor: "#fff",
      });

      // word图片处理myEcharts
      let ImageModule = require("docxtemplater-image-module-free");

      // 读取并获得模板文件的二进制内容
      JSZipUtils.getBinaryContent("/down2.docx", function (error, content) {
        if (error) {
          throw error;
        }
        // 图片属性处理
        let opts = {};
        opts.centered = true; // 图片居中，在word模板中定义方式为{%image}
        opts.fileType = "docx";
        opts.getImage = function (chartId) {
          return _this.base64DataURLToArrayBuffer(chartId);
        };
        opts.getSize = function () {
          return [500, 220];
        };
        // 创建图片模板
        let imageModule = new ImageModule(opts);

        let zip = new PizZip(content);
        let doc = new docxtemplater();
        doc.attachModule(imageModule);
        doc.loadZip(zip);
        // 设置模板变量的值
        doc.setData({
          title1: _this.text1,
          title2: _this.text2,
          imgUrl: imgUrl,
          textList: [
            { item: "123", name: "测试1" },
            { item: "456", name: "测试2" },
          ],
        });

        try {
          // 用模板变量的值替换所有模板变量
          doc.render();
        } catch (error) {
          // 抛出异常
          let e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          };
          _this.loading = false;
          throw error;
        }
        // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
        let out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        // 将目标文件对象保存为目标类型的文件，并命名
        saveAs(out, "测试导出" + new Date().getTime() + ".docx");
        _this.loading = false;
      });
    },
    // echart图片处理
    base64DataURLToArrayBuffer(dataURL) {
      const base64Regex = /^data:image\/(png|jpg|svg|svg\+xml);base64,/;
      if (!base64Regex.test(dataURL)) {
        return false;
      }
      const stringBase64 = dataURL.replace(base64Regex, "");
      let binaryString;
      if (typeof window !== "undefined") {
        binaryString = window.atob(stringBase64);
      } else {
        binaryString = new Buffer(stringBase64, "base64").toString("binary");
      }
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        const ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
      return bytes.buffer;
    },
  },
};
</script>

<style lang="scss" scoped>
.downword-page {
  position: relative;
  .download {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100px;
    line-height: 35px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: blue;
    cursor: pointer;
    border: 1px solid blue;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
      color: white;
      background: blue;
    }
  }
  .download1 {
    position: absolute;
    top: 20px;
    left: 200px;
    width: 100px;
    line-height: 35px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: blue;
    cursor: pointer;
    border: 1px solid blue;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
      color: white;
      background: blue;
    }
  }
  .title {
    text-align: center;
    &.title-1 {
      font-size: 20px;
      line-height: 40px;
    }
    &.title-2 {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 30px;
    }
  }
  &-myEcharts {
    height: 800px;
  }
}
</style>
