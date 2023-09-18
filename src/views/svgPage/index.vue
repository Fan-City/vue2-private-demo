<template>
  <div class="svgPage-wapper">
    <div class="svg-header">
      <h2><strong><span>本地图标库</span></strong></h2>
    </div>
    <div class="svgPage-container flex-container">
      <div
        v-for="(item, index) in icons"
        :key="index"
        class="svg-item flex-container"
      >
        <div class="svg-item-top flex-container">
          <svg-icon :icon-class="item" />
        </div>
        <div class="svg-item-name">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    icons() {
      try {
        //获取所有icons文件数据
        let data = require
          .context("@/assets/icons/svg", false, /\.svg$/)
          .keys();
        for (let i in data) {
          //遍历替换全部 ./ 和 .svg 为空
          data[i] = data[i].replace(/\.\//g, "").replace(/\.svg/g, "");
        }
        console.log(data);
        return data;
      } catch (e) {
        return [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.svgPage-wapper {
  .svg-header {
    height: 40px;
    line-height: 40px;
  }
  .svgPage-container {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-direction: row;
    .svg-item {
      overflow: hidden;
      height: 100px;
      width: 80px;
      flex-direction: column;
      margin: 10px;
      border: 1px solid rgba(204, 204, 204, 0.8);
      box-shadow: 2px 2px 3px rgba(204, 204, 204, 0.9);
      border-radius: 8px;
      .svg-item-top {
        flex: 1;
        position: relative;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        &::after {
          content: " ";
          position: absolute;
          height: 1px;
          bottom: 0;
          left: 5px;
          right: 5px;
          background-color: rgba(204, 204, 204, 0.5);
        }
      }
      .svg-item-name {
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        text-align: center;
        color: rgba(150, 150, 150, 0.9);
      }
    }
  }
}
</style>