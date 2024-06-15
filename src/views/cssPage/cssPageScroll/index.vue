<template>
  <div class="cssPageScroll-wapper">
    <div class="scroll-container">
      <div class="scroll-item scroll-item-1">
        <div class="scroll-item-content scroll-item-one">
          <div class="one-list-container">
            <div
              v-for="(item, index) in contentObj.contentOne.list"
              :key="index"
              class="one-content-item"
              :style="`--O: ${contentObj.contentOne.oneOpacity}; --T: ${(index + 1 - contentObj.contentOne.onListStepArg)*contentObj.contentOne.onListStepT*contentObj.contentOne.oneOpacity + 'px'};--S:${contentObj.contentOne.oneOpacity<0.7?0.7:contentObj.contentOne.oneOpacity}`">
              <span>
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-item">
        <div class="scroll-item-content">
          99999
        </div>
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
      wapperWidth: 0,
      contentObj: {
        contentOne: {
          list: ['一', '二', '三', '四', '五', '六'],
          oneOpacity: 0,
          onListStepArg: 0,
          onListStepT: 0
        },
      },
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
      this.wapperWidth = document.querySelector('.cssPageScroll-wapper').clientWidth;

      this.contentObj.contentOne.onListStepArg = (this.contentObj.contentOne.list.length / 2 + 0.5);
      this.contentObj.contentOne.onListStepT = (this.wapperWidth - 200) / this.contentObj.contentOne.list.length;
    },
    // 设置滚动时，可视动画区域的高度
    initItemHeight() {
      const scrollItems = document.querySelectorAll(".scroll-item-content");
      for (const item of scrollItems) {
        item.style.height = this.wapperHeight + 'px';
      }
    },
    onScroll() {
      let scrollLen = document.querySelector(".scroll-container").getBoundingClientRect().top - document.querySelector(".cssPageScroll-wapper").offsetTop
      this.contentEvent()
    },
    contentEvent() {
      const ele_H_1 = document.querySelector(".scroll-item-1").clientHeight; // 容器高度
      const ele_one = document.querySelector(".scroll-item-one"); // 内容元素
      const ele_H_item = document.querySelector(".scroll-item-one").clientHeight; // 内容主体高度
      const top_one = this.getDistanceToParentTop(ele_one) - 59; // 内容主题的滚动高度
      const difference = ele_H_1 - ele_H_item; // 容器与滚动可视区域的高度差值。
      const proportion = (top_one / difference).toFixed(4); // 内容主题的滚动高度 的滚动占比

      // 从0.1开始，到0.8结束做变化边界
      if (proportion <= 0.7 && proportion >= 0.1) {
        let contentPre = ((proportion-0.1).toFixed(4) / 0.6).toFixed(2); // 视图变化的百分比 以滚动占比0.1-0.7为边界

        if (contentPre < 0.03 ) {
          contentPre = 0
        } else if (contentPre > 0.97) {
          contentPre = 1
        }
        this.contentObj.contentOne.oneOpacity = contentPre;
      }
    },
    // 内容主题的滚动高度
    getDistanceToParentTop(element) {
      return element.offsetTop;
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
    .scroll-item {
      height: 2800px;
      background-image: linear-gradient(rgb(126, 184, 255),rgb(133, 173, 247), rgb(113, 100, 255));
      // background: black;
      &-content {
        color: #ffffff;
        background: rgba(0, 0, 0, 0.2);
        position: sticky;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .one-list-container {
          position: relative;
          .one-content-item {
            background: #46bbff;
            color: #ffffff;
            font-size: 14px;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-radius: 8px;
            opacity: var(--O);
            transition: .1s;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(calc(-50% + var(--T)), -50%) scale(var(--S));
          }
        }
      }
    }
  }
}
</style>
