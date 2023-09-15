<template>
    <div class="header-wrapper">
        <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
        <div><span>我是头部</span></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
export default{
    components:{
        Hamburger
    },
    methods:{
        toggleSideBar() {
            this.$store.dispatch('app/toggleSideBar');
        },  
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ])
    }
}
</script>
<style lang="scss" scoped>
.header-wrapper{
    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        padding: 0 15px;
        cursor: pointer;
        transition: background .3s;
        -webkit-tap-highlight-color:transparent;

        &:hover {
            background: rgba(0, 0, 0, .025);
        }
    }
}
</style>
