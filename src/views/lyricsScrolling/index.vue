<template>
  <div class="lyrics-wapper">
    <div class="button-con">
      <div class="btn-item" @click="initPage()">开始</div>
      <div class="btn-item" @click="toSleep()">暂停</div>
      <div class="btn-item" @click="doContinue()">继续</div>
    </div>
    <div class="lyrics-container">
      <ul>
        <li><div><div></div><span>Lorem ipsum dolor sit amet.</span></div></li>
        <li><div><div></div><span>Nostrum ullam sint quos omnis.</span></div></li>
        <li><div><div></div><span>Enim omnis animi praesentium ducimus!</span></div></li>
        <li><div><div></div><span>Fugit nobis enim ex quae.</span></div></li>
        <li><div><div></div><span>Optio minima nihil cupiditate temporibus.</span></div></li>
        <li><div><div></div><span>Fugit tenetur voluptate totam tempore.</span></div></li>
        <li><div><div></div><span>Officiis dolore ipsum magni et.</span></div></li>
        <li><div><div></div><span>Beatae delectus corporis possimus facere.</span></div></li>
        <li><div><div></div><span>Eligendi vitae ratione voluptate corrupti.</span></div></li>
        <li><div><div></div><span>Architecto molestias itaque repellendus sapiente?</span></div></li>
        <li><div><div></div><span>Mollitia eveniet repudiandae voluptates nemo!</span></div></li>
        <li><div><div></div><span>Cum culpa tempora aliquid itaque.</span></div></li>
        <li><div><div></div><span>Non esse optio dolorem reiciendis?</span></div></li>
        <li><div><div></div><span>Illo vitae nulla labore neque!</span></div></li>
        <li><div><div></div><span>Odit porro nesciunt mollitia. Incidunt.</span></div></li>
        <li><div><div></div><span>Aperiam modi dolorem quidem animi?</span></div></li>
        <li><div><div></div><span>Deserunt esse aliquid aliquam temporibus?</span></div></li>
        <li><div><div></div><span>Vero atque pariatur blanditiis numquam.</span></div></li>
        <li><div><div></div><span>Iste sed sequi autem praesentium.</span></div></li>
        <li><div><div></div><span>Architecto ullam ipsam similique iusto!</span></div></li>
        <li><div><div></div><span>Rem placeat optio totam eligendi!</span></div></li>
        <li><div><div></div><span>Voluptatem excepturi repellat nesciunt exercitationem.</span></div></li>
        <li><div><div></div><span>Beatae aspernatur explicabo non maiores.</span></div></li>
        <li><div><div></div><span>Sint unde culpa numquam consequatur.</span></div></li>
        <li><div><div></div><span>Recusandae possimus voluptas nam voluptatem?</span></div></li>
        <li><div><div></div><span>Vero numquam libero itaque maxime.</span></div></li>
        <li><div><div></div><span>Omnis saepe similique ut tenetur!</span></div></li>
        <li><div><div></div><span>Neque porro commodi fugiat mollitia?</span></div></li>
        <li><div><div></div><span>Autem laborum quis voluptates illum?</span></div></li>
        <li><div><div></div><span>Soluta illo possimus deleniti fuga.</span></div></li>
        <li><div><div></div><span>Nam sed consectetur assumenda ducimus.</span></div></li>
        <li><div><div></div><span>Eveniet fugit vero maiores suscipit?</span></div></li>
        <li><div><div></div><span>In aliquam ratione at omnis?</span></div></li>
        <li><div><div></div><span>Quam, quae iusto. Fugit, iste.</span></div></li>
        <li><div><div></div><span>At ipsa corrupti et dignissimos.</span></div></li>
        <li><div><div></div><span>Aspernatur consectetur ullam libero esse.</span></div></li>
        <li><div><div></div><span>Molestiae, nostrum amet? Error, possimus?</span></div></li>
        <li><div><div></div><span>Recusandae eum culpa non vel.</span></div></li>
        <li><div><div></div><span>Quisquam eligendi excepturi quos eius.</span></div></li>
        <li><div><div></div><span>Corrupti corporis at eius nam.</span></div></li>
        <li><div><div></div><span>Vero assumenda ratione libero sapiente?</span></div></li>
        <li><div><div></div><span>Quia, asperiores esse! Mollitia, labore.</span></div></li>
        <li><div><div></div><span>Recusandae molestiae error fuga iure.</span></div></li>
        <li><div><div></div><span>Voluptatibus officiis neque nobis voluptatum.</span></div></li>
        <li><div><div></div><span>Non voluptate laudantium fugit unde?</span></div></li>
        <li><div><div></div><span>Officia dolorum ipsa eius officiis.</span></div></li>
        <li><div><div></div><span>Voluptatum mollitia minima voluptates reiciendis?</span></div></li>
        <li><div><div></div><span>Accusantium maxime repellat exercitationem unde!</span></div></li>
        <li><div><div></div><span>Qui modi doloribus accusamus aliquam?</span></div></li>
        <li><div><div></div><span></span></div></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 获取将要用到的dom元素
      doms: {
        container: null,
        ulDom: null,
        liList: null
      },
      // 移动ul计算用到的 高度
      containerHeight: null,
      ulHeight: null,
      liHeight: null,
      activeCode: 'active', // class names
      timeObj: {
        timeIndex: 0,
        timeoutTemp: null
      }
    }
  },
  methods: {
    runWord() {
      this.timeObj.timeoutTemp = setTimeout(() => {
        this.changeWord();
      }, 700);
    },
    /**
     * 文字滚动，单行样式变化
     */
    changeWord(){
      const activitedDom = document.querySelector('.' + this.activeCode); // 获取活动中的文本
      if(activitedDom) {
        document.querySelector('.' + this.activeCode).classList.remove(this.activeCode); // 重置正在高亮的文本
      }
      // 判断是否读到最后一句
      if(this.timeObj.timeIndex < this.doms.ulDom.childElementCount) {
        this.moveUl();
        // 对应文本行添加样式
        let li = this.doms.liList[this.timeObj.timeIndex];
        if(li){
          li.classList.add(this.activeCode);
        }
        this.timeObj.timeIndex++;
        this.runWord();
      }else{
        clearTimeout(this.timeObj.timeoutTemp); // 当超过文本长度时，清空计时器
      }
    },
    /**
     * 移动ul位置 
     */
    moveUl() {
      if(this.liHeight*(this.timeObj.timeIndex) > this.containerHeight / 2){
        let move = this.liHeight*(this.timeObj.timeIndex + 1) - this.liHeight - this.containerHeight/2;
        if(this.ulHeight - move > this.containerHeight){
          // debugger
          this.doms.ulDom.style.transform = `translateY(-${move}px)`;
        }else{
          this.timeObj.timeoutTemp = null;
        }
      }
    },
    /**
     * 暂停
     */
    toSleep(){
      clearTimeout(this.timeObj.timeoutTemp);
      this.timeObj.timeoutTemp = null;
    },
    doContinue() {
      if(this.timeObj.timeoutTemp){return}
      this.changeWord();
    },
    initPage() {
      if(this.timeObj.timeoutTemp){ return }
      this.timeObj = {
        timeIndex: 0,
        timeoutTemp: null
      }
      this.doms.ulDom.style.transform = `translateY(-${0}px)`;
      this.runWord();
    }
  },
  mounted() {
    this.doms = {
      container: document.querySelector('.lyrics-container'),
      ulDom: document.querySelector('.lyrics-container ul'),
      liList: document.querySelectorAll('.lyrics-container li')
    }
    this.containerHeight = this.doms.container.clientHeight;
    this.ulHeight = this.doms.ulDom.clientHeight;
    this.liHeight = this.doms.liList[0].clientHeight;
  }
}
</script>

<style lang="scss" scoped>
.lyrics-wapper {
  background: #000;
  height: 100%;
  overflow: hidden;
  position: relative;
  .button-con{
    position: absolute;
    left: 20px;
    top: 20px;
    border-radius: 5px;
    background: #fff;
    // border: 1px solid rgba(194, 194, 194, 0.8);
    display: flex;
    overflow: hidden;
    z-index: 100;
    .btn-item{
      padding: 10px 15px;
      background: #fff;
      transition: .3s;
      font-size: 14px;
      color: #0a70ed;
      border-right: 1px solid rgba(194, 194, 194, 0.8);
      cursor: pointer;
      &:last-child { border-right: none; }
      &:hover {
        color: #fff;
        background: #0a70ed;
      }
    }
  }
  .lyrics-container {
    height: 420px;
    overflow: hidden;
    font-size: 14px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    ul {
      list-style: none;
      transition: .8s;
      li {
        height: 30px;
        line-height: 30px;
        width: 100%;
        display: flex;
        > div {
          display: inline-block;
          margin: 0 auto;
          position: relative;
          color: #7e7e7e;
          transition: .8s;
          overflow: hidden;
          > div {
            position: absolute;
            inset: 1px;
            background: #fff;
            z-index: 20;
            transform: scaleX(0);
            transition: .8s;
          }
          > span {
            padding: 0 5px;
            display: inline-block;
            position: relative;
            background: #000;
            height: 30px;
            line-height: 30px;
            z-index: 21;
            mix-blend-mode: hard-light;
          }
        }
        &.active {
          > div {
            transform: scale(1.1);
            > div{
              transform: scaleX(100%);
            }
            span {
              color: #7e7e7e;
            }
          }
        }
      }
    }
  }
}
  
</style>