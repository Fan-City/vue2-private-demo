<template>
  <div>
    <quill-editor v-model="content"></quill-editor>
    <button @click="exportContent">导出</button>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

// 新增：导入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    exportContent() {
      const content = this.content
      const blob = new Blob([content], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'content.txt'
      link.click()
    }
  }
}
</script>