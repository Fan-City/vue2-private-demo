<template>
    <div class="earth-container">
        <div id="earth" />
    </div>
</template>
<script>
import Earth3D from './run.js'
export default {
  name: 'Third',
  data() {
    return {
      candy: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.candy = new Earth3D(document.getElementById('earth'))
    this.candy.start()
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.earth-container{
    min-height: 720px;
    >div{
        width: 100%;
        height: 100%;
        position: relative;
    }
}
</style>