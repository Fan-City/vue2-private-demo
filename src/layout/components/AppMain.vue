<template>
<section class="app-main">
  <transition name="fade-transform" mode="out-in">
    <template class="main-content">
      <router-view :key="key" />
    </template>
  </transition>
</section>
</template>

<script>
import csspage from '@/views/cssPage/index.vue'
export default {
  name: 'AppMain',
  components: {
    csspage
  },
  computed:{
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
$menuW: 180px;
.app-main{
  margin-top: #{$headerH};
  border: 1px solid #fff;
  padding: 8px;
  .main-content{
    padding: 8px;
    overflow-y: auto;
  }
}
</style>
