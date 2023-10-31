<template>
  <div>
    <div>
      <el-button @click="toShow">
        点击
      </el-button>
    </div>
    <el-input
      v-if="show"
      ref="elInput"
      v-model="value"
    ></el-input>
    <el-input
      v-if="show1"
      ref="elInput"
      v-model="value"
    ></el-input>
    <el-input
      v-if="show2"
      ref="elInput"
      v-model="value"
    ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      value: "",
    }
  },
  methods: {
    toShow() {
      setTimeout(() => {
        this.show = true;
        this.show1= true;
        this.show2 = true;
      }, 1000);
      // this.$refs.elInput.
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = false;
          this.show1 = false;
          this.show2 = false;
        }, 2000);
      })
    }
  }
}
</script>
