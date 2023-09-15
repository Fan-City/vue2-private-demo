<template>
  <div class="csspage flex-container">
    <div v-silde-in class="content-item flex-container">
      <heart />
    </div>
    <div v-silde-in class="content-item flex-container">
      <springpage />
    </div>
    <div v-silde-in class="content-item flex-container">
      <snow />
    </div>
  </div>
</template>

<script>
import heart from './pageItem/heart.vue'
import springpage from './pageItem/springpage.vue'
import snow from './pageItem/snow.vue'

export default {
  name: 'csspage',
  components:{
    heart,
    springpage,
    snow
  }
}
</script>
<style lang="scss" scoped>
.csspage{
  flex-direction:row;
  flex-wrap: wrap;
  overflow: hidden;
  .content-item{
    // width: 290px;
    height: 210px;
    flex: 1 0 210px;
    margin: 10px;
    box-shadow: 0 0 5px #d7d7d7ce;
    -webkit-box-shadow: 0 0 5px #d7d7d7ce;
    -moz-box-shadow: 0 0 5px #d7d7d7ce;
    position: relative;

    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
    overflow: hidden;
  }
  .content-item::before{
    content: "";
    position: absolute;
    width: 120%;
    height: 70%;
    background:linear-gradient(#00ccff,#d500f9);
    animation: rotate 4s linear infinite;
    overflow: hidden;
  }
  @keyframes rotate {
    from{
      transform: rotate(Odeg);
    }
    to{
      transform: rotate(360deg);
    }
  }
  .content-item::after{
    content: "";
    position: absolute;
    background: #000;
    inset: 3px;
    border-radius: 20px;
  }
}
</style>
