<template>
  <div class="springpage-container container flex-container">
    <div class="item" style="--i:0;"/>
    <div class="item" style="--i:1;"/>
    <div class="item" style="--i:2;"/>
    <div class="item" style="--i:3;"/>
    <div class="item" style="--i:4;"/>
    <div class="item" style="--i:5;"/>
    <div class="item" style="--i:6;"/>
    <div class="item" style="--i:7;"/>
    <div class="item" style="--i:8;"/>
    <div class="item" style="--i:9;"/>
    <div class="item" style="--i:10;"/>
    <div class="item" style="--i:11;"/>
    <div class="item" style="--i:12;"/>
    <div class="item" style="--i:13;"/>
  </div>
</template>

<script>
export default {
  name: 'springpage'
}
</script>
<style lang="scss" scoped>
.container{
    position: relative;
    justify-content: center;
    align-items: center;
    .item{
        position: absolute;
        background-color: transparent;
        width: calc(var(--i) * 16px);
        aspect-ratio: 1;
        border: 3px solid rgb(0, 200, 255);
        border-radius: 50%;
        transform: rotateX(80deg);
        animation: move 3s ease-in-out calc(var(--i) * 0.08s) infinite;
        // filter: drop-shadow(0 0 5px rgb(124,124,124));
    }
    @keyframes move {
        0%,100%{
            transform: rotateX(80deg) translateY(150px);
            filter: hue-rotate(0deg);
        }
        50%{
            transform: rotateX(80deg) translateY(-150px);
            filter: hue-rotate(180deg);
        }
    }
}
</style>
