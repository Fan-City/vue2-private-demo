<template>
  <div class="honeycomb-wapper">
    <div class="honeycomb-container"></div>
  </div>
</template>

<script>
import { pro } from './js/pro'
import { creatHoneycomb } from "./js/honeycomb.js";
export default {
  data() {
    return {
      list: [
        { key: "1", value: "1", imgurl: "./images/行业背景1.png" },
        { key: "2", value: "2", imgurl: "./images/行业背景1.png" },
        { key: "3", value: "3", imgurl: "./images/行业背景1.png" },
        { key: "4", value: "4", imgurl: "./images/行业背景1.png" },
        { key: "5", value: "5", imgurl: "./images/行业背景1.png" },
        { key: "6", value: "6", imgurl: "./images/行业背景1.png" },
        { key: "7", value: "7", imgurl: "./images/行业背景1.png" },
        { key: "8", value: "8", imgurl: "./images/行业背景1.png" },
        { key: "9", value: "9", imgurl: "./images/行业背景1.png" },
        { key: "10", value: "10", imgurl: "./images/行业背景1.png" },
        { key: "11", value: "11", imgurl: "./images/行业背景1.png" },
        { key: "12", value: "12", imgurl: "./images/行业背景1.png" },
        { key: "13", value: "13", imgurl: "./images/行业背景1.png" },
        { key: "14", value: "14", imgurl: "./images/行业背景1.png" },
        { key: "15", value: "15", imgurl: "./images/行业背景1.png" },
        { key: "16", value: "16", imgurl: "./images/行业背景1.png" },
        { key: "17", value: "17", imgurl: "./images/行业背景1.png" },
        { key: "18", value: "18", imgurl: "./images/行业背景1.png" },
        { key: "19", value: "19", imgurl: "./images/行业背景1.png" },
        { key: "20", value: "20", imgurl: "./images/行业背景1.png" },
        { key: "21", value: "21", imgurl: "./images/行业背景1.png" },
        { key: "22", value: "22", imgurl: "./images/行业背景1.png" },
        { key: "23", value: "23", imgurl: "./images/行业背景1.png" },
        { key: "24", value: "24", imgurl: "./images/行业背景1.png" },
        { key: "25", value: "25", imgurl: "./images/行业背景1.png" },
        { key: "26", value: "26", imgurl: "./images/行业背景1.png" },
        { key: "27", value: "27", imgurl: "./images/行业背景1.png" },
        { key: "28", value: "28", imgurl: "./images/行业背景1.png" },
        { key: "29", value: "29", imgurl: "./images/行业背景1.png" },
        // {key:'30', value: '30', imgurl: './images/行业背景1.png'},
        // {key:'31', value: '31', imgurl: './images/行业背景1.png'},
      ]
    };
  },
  methods: {
    getList() {
      let el = document.querySelector(".honeycomb-container");
      creatHoneycomb(el, this.list);
    },
  },
  mounted() {
    this.getList();
    pro().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss">
$size: 100px;
.honeycomb-wapper {
  height: 100%;
  background: url(~@/assets/images/honeycomb/bg.jpg) no-repeat;
  background-size: cover;

  .honeycomb-container {
    position: absolute;
    // height: $size * 5;
    width: $size * 4.2;
    max-height: $size * 4.2;
    overflow-y: auto;
    // padding: 0 20px;
    // background: #2a2a2a;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
    }
    .line {
      display: flex;
      position: relative;
      height: $size / 2 * 3;
      // &:nth-child(even){
      //   transform: translateX($size / 2);
      // }
      margin-top: -$size / 2 +3px;
      &:first-child {
        margin-top: $size / 12;
      }
      &:last-child {
        margin-bottom: $size / 12;
      }
      .item {
        width: $size;
        height: $size;
        // background: #fff;
        // clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        -webkit-clip-path: polygon(
          75% 0,
          100% 50%,
          75% 100%,
          25% 100%,
          0 50%,
          25% 0
        );
        background: url(~@/assets/images/honeycomb/itemBG.png);
        clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
        position: absolute;
        background-size: 100% 100%;
        text-rendering: geometricPrecision;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        // cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            left: ($i - 1) * ($size / 36 * 28) + 3px;
            @if ($i % 2 == 0) {
              bottom: -1px;
            } @else {
              top: -1px;
            }
          }
        }
      }
    }
  }
}
</style>