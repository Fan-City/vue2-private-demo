<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
      <div
        v-for="(item, index) in form.list"
        :key="index"
      >
        <el-form-item
          :label="'名字' + (index + 1)"
          :prop="'list.' + index + '.name'"
          :rules="[{ required: true, message: '请输入名字', trigger: 'blur' }]"
        >
          <el-input v-model="item.name"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <el-button @click="doTrue">
      确定
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        list: []
      }
    }
  },
  created() {
    this.form.list = [
      {
        name: '123'
      }
    ]
  },
  methods: {
    doTrue() {
      console.log(this.form)
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(1)
        }
      })
    }
  }
}
</script>

<style>

</style>