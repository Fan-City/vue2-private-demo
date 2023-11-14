<template>
  <div class="cssPageScroll-wapper">
    <div class="scroll-container">
      <div class="scroll-item">
        1
      </div>
    </div>
  </div>
</template>

<script>
// 此页面不考虑窗口变化大小，且暂时只有一个滚动节点
export default {
  data() {
    return {
      wapperHeight: 0,
    }
  },
  mounted() {
    this.getWapperHeight();
    this.initItemHeight();

    document.querySelector(".cssPageScroll-wapper").addEventListener("scroll", () => {
      this.onScroll();
    });
  },
  methods: {
    // 获取滚动的可视区域高度
    getWapperHeight() {
      this.wapperHeight = document.querySelector('.cssPageScroll-wapper').clientHeight;
    },
    // 设置滚动时，可视动画区域的高度
    initItemHeight() {
      const scrollItems = document.querySelectorAll(".scroll-item");
      for (const item of scrollItems) {
        item.style.height = this.wapperHeight + 'px';
      }
    },
    onScroll() {
      let scrollLen = document.querySelector(".scroll-container").getBoundingClientRect().top - document.querySelector(".cssPageScroll-wapper").offsetTop
      console.log(scrollLen);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.getWapperHeight();
      this.initItemHeight();
    })
  }
}
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
}
.cssPageScroll-wapper {
  height: 100%;
  overflow-y: auto;
  .scroll-container {
    position: relative;
    height: 2000px;
    background-image: linear-gradient(yellow,white, green);
    .scroll-item {
      position: absolute;
      width: 100%;
      top: 0;

    }
  }
}
</style>
