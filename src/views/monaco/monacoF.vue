<template>
  <div>
    <monaco v-model="value" :opts="opts" @contentChange="contentChange"></monaco>
  </div>
</template>
 
<script>
import monaco from '@/components/monaco/monaco.vue'
export default {
  components: {
    monaco,
  },
  data() {
    return {
      value: '/n',
      countent: '',
      opts: {
        value: '',
        readOnly: false, // 是否可编辑
        language: 'yaml', // 语言类型
        theme: 'vs-dark', // 编辑器主题
      },
    }
  },
  methods: {
    contentChange(val) {
      //每次改变编辑器内容触发事件，先用一个值存放数据
      this.countent = val
      console.log(val, JSON.stringify(val))
    },
    submit() {
      //在你提交给后台时将this.countent赋值给value
      this.countent = this.value
    },
  },
}
</script>
 
<style>
</style>