<template>
  <InputNumber v-model="value" style="width: 200px" />
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
    };
  },
};
</script>
