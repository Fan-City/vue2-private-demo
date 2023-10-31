<template>
  <div class="eventLoop-page">
    <div class="loop_1">
      第一种
      <div id="loop_con_1" name="loop_con_1">
        <el-button @click="addLoop1(loopAdd1)">事件1</el-button>
        <el-button @click="addLoop1(loopAdd2)">事件2</el-button>
        <el-button @click="addLoop1(loopAdd3)">事件3</el-button>
      </div>
    </div>
    <div class="loop_2">
      第二种
      <div id="loop_con_2" name="loop_con_2">
        <el-button @click="addLoop2(loopAdd4, loop2_data_add1)">事件4</el-button>
        <el-button @click="addLoop2(loopAdd5, loop2_data_add2)">事件5</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loop1_data: 1,
      loop1_data_add1: 1,
      loop1_data_add2: 2,
      loop1_data_add3: 3,
      clickIndex: 1, // 记录第一种方式的点击次数
      eventimit: true, // 用于限制事件执行
      eventLoop: [], // 总队列
      // 第二种
      loop2_data: 1,
      loop2_data_add1: 1,
      loop2_data_add2: 2
    }
  },
  methods: {
    // 第一种 start
    addLoop1(fun) {
      // 最大为10， 因为 第一次会立即取出并执行，所以 设置小于 9； 且在点击过程中，事件执结束也会立即取出并执行下一次事件。所以只能限制大概范围。
      if (this.eventLoop.length < 9) {
        this.eventLoop.push(fun);
        console.log(this.eventLoop, "=========> " + this.clickIndex);
        this.clickIndex ++;
        this.doLoop_1();
      } else {
        this.msgWarning("您点击过快，请稍后再试");
      }
    },
    loopAdd1() {
      return new Promise(resole => {
        setTimeout(() => {
          this.loop1_data += this.loop1_data_add1;
          resole([this.loop1_data, this.loop1_data_add1]);
        }, 8000);
      })
    },
    loopAdd2() {
      return new Promise(resole => {
        setTimeout(() => {
          this.loop1_data += this.loop1_data_add2;
          resole([this.loop1_data, this.loop1_data_add2]);
        }, 8000);
      })
    },
    loopAdd3() {
      return new Promise(resole => {
        setTimeout(() => {
          this.loop1_data += this.loop1_data_add3;
          resole([this.loop1_data, this.loop1_data_add3]);
        }, 8000);
      })
    },
    doLoop_1() {
      if (this.eventimit) {
        this.eventimit = false;
        
        if(this.eventLoop.length > 0) {
          const fun = this.eventLoop.shift();
          fun().then(res => {
            let [sum, addNum] = res;
            console.log(res);
            this.msgSuccess(`增加了${addNum}, 和为${sum}`);
            this.eventimit = true;
            this.doLoop_1();
          });
        } else {
          this.eventimit = true;
        }
      }
    },

    // 第二种 带参、fun：回调；data：任何参数，包括获取值的方法 start
    addLoop2(fun, data) {
      fun(data);
    },
    loopAdd4(num) {
      console.log(num);
    },
    loopAdd5(num) {
      console.log(num);
    },
  }
}
</script>
