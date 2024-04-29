<template>
  <el-form :model="form" ref="form" label-width="80px">
    <div
      v-for="(item, index) in form.itemsaaaa"
      :key="index"
    >
      <el-form-item
        :label="'名字 ' + (index + 1)"
        :prop="'itemsaaaa.' + index + '.value'"
        :rules="[{ required: true, message: '必填', trigger: 'change' }]"
      >
        <el-input v-model="item.value"></el-input>
      </el-form-item>
    </div>
    <el-button type="primary" @click="addItem">添加</el-button>
    <el-button type="success" @click="submitForm">确定</el-button>
  </el-form>
</template>
 
<script>
export default {
  data() {
    return {
      form: {
        itemsaaaa: []
      }
    };
  },
  created() {
    // form添加初始值
    this.form.itemsaaaa = [
      {
        name: '123',
      },
      {
        name: '123',
      }
    ]
  },
  methods: {
    addItem() {
      this.form.itemsaaaa.push({ value: ''});
    },
    submitForm() {
      console.log(this.form)
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('成功了')
        }
      });
    }
  }
};
</script>