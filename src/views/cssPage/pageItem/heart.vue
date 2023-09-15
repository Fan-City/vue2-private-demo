<template>
  <div class="heart-container flex-container container">
    <div class="heart"/>
  </div>
</template>

<script>
export default {
  name: 'heart'
}
</script>
<style lang="scss" scoped>
$size: 80px;
.heart-container {
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .heart {
        width: #{$size};
        height: #{$size};
        background-color: #f04d24;
        transform: rotate(45deg);
        filter: drop-shadow(0 0 20px #f9562eae);
        animation: pengpeng 1.3s infinite;
    }
    .heart::after,
    .heart::before {
        content: '';
        width: #{$size};
        height: #{$size};
        border-radius: 50%;
        position: absolute;
        background-color: #f04d24;
    }
    .heart::after {
        right: 40px;
    }
    .heart::before {
        top: -40px;
    }
    @keyframes pengpeng {
        0% {
            transform: rotate(45deg) scale(1.3);
        }
        50% {
            transform: rotate(45deg) scale(1.1);
        }
        100% {
            transform: rotate(45deg) scale(1.3);
        }
    }
}



</style>
