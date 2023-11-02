<template>
  <div class="imgPage" id="imgPage">
    <el-tooltip class="item" effect="dark" content="点击下载" placement="top">
      <el-button @click="handleDownload"><img class="img" id="img" src="@/assets/text/textSY.png" alt="" srcset=""></el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: "cascader",
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleDownload(e){
        if(e.target.nodeName == 'IMG'){
          console.log(e.target.currentSrc)
          this.downloadIamge(e.target.currentSrc, new Date().getTime())
        }
    },
    downloadIamge(imgsrc, name) {
      //下载图片地址和图片名
      var image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
          var canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          canvas.style.display = "none"

          var context = canvas.getContext("2d");
          
          context.drawImage(image, 0, 0, image.width, image.height);

          context.font = "14px"; //设置文字大小
          context.rotate(-0.4); //设置文字旋转角度

          for(let i = (canvas.height*0.5)*-1; i<800; i+=160) {
            for(let j = 0; j<canvas.height*1.5; j+=60) {
              context.fillText(name, i, j)
            }
          }

          var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据'
          var a = document.createElement("a"); // 生成一个a元素

          var event = new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window
          }); // 创建一个单击事件

          a.download = (name+'.png') || "photo"; // 设置图片名称
          a.href = url; // 将生成的URL设置为a.href属性
          a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>