<template>
  <div class="power-container container flex-container">
    <div class="circle-container"></div>
    <div class="powerFrom">
      <div class="powerFrom-content flex-container">
        <span
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :style="'--i:' + getIndex() + ';'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLength: 7,
      list: [],
    };
  },
  created() {
    this.list = [];
    for (let index = 0; index < this.listLength; index++) {
      this.list.push(index);
    }
  },
  methods: {
    getIndex() {
      let num = Math.random() * (15 - 1) + 1 + 10;
      return num;
    },
  },
};
</script>

<style lang="scss" scoped>
.power-container {
  position: relative;
  filter: contrast(30);
  .circle-container {
    position: absolute;
    height: 100px;
    width: 100px;
    background: #000;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    z-index: 20;
    &::before {
      content: "99.9%";
      color: #ffffff;
      height: 100px;
      width: 100px;
      background: #000;
      position: absolute;
      inset: 0;
      border-radius: 50px;
      z-index: 1;
    }
    &::after {
      content: "";
      height: 110px;
      width: 108px;
      background: #ffffff;
      position: absolute;
      left: -5px;
      top: -3px;
      border-top-right-radius: 45px;
      border-top-left-radius: 60px;
      border-bottom-right-radius: 55px;
      border-bottom-left-radius: 50px;
      animation: afterRun 7s infinite linear;
      filter: blur(2px);
    }

    @keyframes afterRun {
      from {
        transform: rotate(Odeg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .powerFrom {
    position: absolute;
    width: 90px;
    height: 30px;
    background: #ffffff;
    border-radius: 100px;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
    .powerFrom-content {
      position: relative;
      z-index: 2;
      span {
        position: relative;
        width: calc(300px / var(--i));
        height: calc(300px / var(--i));
        background: #ffffff;
        border-radius: 50%;
        animation: snowing 8s linear infinite;
        animation-duration: calc(30s / var(--i));
        filter: blur(1px);
      }
      @keyframes snowing {
        0% {
          transform: translateX(0) translateY(20px) rotate(0);
        }
        80% {
          transform: translateX(0) translateY(-100px) scale(1);
        }
        100% {
          transform: translateX(0) translateY(-100px) scale(0);
        }
      }
    }
  }
}
</style>