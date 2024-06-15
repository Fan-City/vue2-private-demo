<template>
  <div>
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd"
      @change="change">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null,
      };
    },
    methods: {
      change() {
        console.log(this.value)
      }
    }
  };
</script>