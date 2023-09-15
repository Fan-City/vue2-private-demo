<template>
  <div class="snow-container container flex-container">
    <div class="snow">
        <div class="snow-content flex-container">
            <span class="item" v-for="(item,index) in list" :key="guid(index)" :style="'--i:'+ getIndex() +';'" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'snow',
  data(){
    return{
        listLength: 15,
        list: []
    }
  },
  created(){
    this.list = [];
    for (let index = 0; index < this.listLength; index++) {
       this.list.push(index)
    }
  },
  methods:{
    getIndex(){
        let num = Math.random()*(15-1)+1 + 10;
        return num;
    }
  }
}
</script>
<style lang="scss" scoped>
$wh: 30px;
.container{
    position: relative;
    justify-content: center;
    align-items: center;
    .snow{
        position: relative;
        width: 120px;
        height: #{$wh};
        background: #fff;
        border-radius: 100px;
        .snow-content{
            position: relative;
            z-index: 11;
            span{
                position: relative;
                width: 3px;
                height: 3px;
                background: #fff;
                margin: 0 2px;
                border-radius: 50%;
                animation: snowing 5s linear infinite;
                animation-duration: calc(15s / var(--i));
            }
            @keyframes snowing {
                0% {
                    transform: translateX(10px) translateY(20px);
                }
                80% {
                    transform: translateX(10px) translateY(100px) scale(1);
                }
                100% {
                    transform: translateX(10px) translateY(100px) scale(0);
                }
            }
        }
    }
    .snow::before{
        content: " ";
        position: absolute;
        height: #{$wh};
        width: #{$wh};
        background: #fff;
        border-radius: 50%;
        box-shadow: 45px 0 0 20px #fff;
        left: 13px;
        top: -20px;
    }
}
</style>
