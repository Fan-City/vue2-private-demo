<template>
  <div>
    <InputNumber v-model="value" style="width: 200px" />
    <el-date-picker
      v-model="value1"
      type="week"
      format="yyyy 第 WW 周"
      value-format="yyyyMMWW"
      placeholder="选择周">
    </el-date-picker>

    <el-select
      v-model="value2"
    >
      <el-option label="一" value="1"></el-option>
      <el-option label="二" value="2"></el-option>
    </el-select>
  </div>
</template>

<script>
import InputNumber from "./components/inputNumber.vue";
export default {
  components: {
    InputNumber,
  },
  data() {
    return {
      value: null,
      value1: null,
      value2: '',
    };
  },
  watch: {
    value1() {
      console.log(this.value1)
      
    }
  }
};
</script>
