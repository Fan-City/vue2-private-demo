<template>
  <div>
    <el-form
      :model="form"
      label-width="80px"
    >
      <el-form-item label="红">
        <el-input-number :min="6" v-model="form.hn"></el-input-number>
      </el-form-item>
      <el-form-item label="蓝">
        <el-input-number :min="1" v-model="form.ln"></el-input-number>
      </el-form-item>
      <el-form-item label="个数">
        <el-input-number :min="1" v-model="form.len"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getData">立即创建</el-button>
      </el-form-item>
    </el-form>

    <div>
      <span class="code-row" v-for="(item, index) in rcode" :key="index">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import RandomCode from './shuangse1.js';
export default {
  data() {
    return {
      form: {
        hn: 6,
        ln: 1,
        len: 5
      },
      rcode: []
    }
  },
  created() {
  },
  methods: {
    getData() {
      const mCode = new RandomCode(this.form.hn, this.form.ln, this.form.len);
      this.rcode = mCode.run();
    }
  }
}
</script>

<style lang="scss" scoped>
.code-row {
  display: block;
}
</style>