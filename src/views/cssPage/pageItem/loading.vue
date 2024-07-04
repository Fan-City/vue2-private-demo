<template>
  <div class="loading-wapper">
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
    <div class="dop"></div>
  </div>
</template>

<style lang="scss" scoped>
$num: 72;
$psize: 150px;
$csize: 6px;
$cDeg: 360deg / $num;
$dur: 2s;
.loading-wapper {
  width: $psize;
  height: $psize;
  border-radius: 50%;
  z-index: 1;
  position: relative;
  .dop {
    height: $csize;
    width: $csize;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: - $csize / 2;
    margin-top: - $csize / 2;
    transform-origin: center $psize / 2 + $csize / 2;
    @for $i from 1 through $num {
      &:nth-child(#{$i}) {
        transform: rotate(($i - 1) * $cDeg);
        &::before,
        &::after {
          animation-delay: - $dur / $num * ($i - 1) * 6;
        }
      }
    }

    &::before, &::after {
      content: " ";
      position: absolute;
      width: $csize;
      height: $csize;
      left: 50%;
      margin-left: - $csize / 3;
      border-radius: 50%;
    }
    perspective: 80px;
    transform-style: preserve-3d;
    
    &::before {
      background: #409eff;
      top: - $csize;
      animation: rotate-top $dur infinite;
      @keyframes rotate-top {
        0% {
          transform: translate3d(0, 0, 0);
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0, 100%, $csize * 2);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0, 200%, 0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0, 100%, - $csize * 2);
          animation-timing-function: ease-out;
        }
      }
    }
    &::after {
      background: #ffffff;
      bottom: - $csize;
      animation: rotate-bottom $dur infinite;
      @keyframes rotate-bottom {
        0% {
          transform: translate3d(0, 0, 0);
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0, -100%, - $csize * 2);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0, -200%, 0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0, -100%, $csize * 2);
          animation-timing-function: ease-out;
        }
      }
    }
  }
}
</style>