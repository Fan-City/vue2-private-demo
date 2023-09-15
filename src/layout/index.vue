<template>
    <div class="app-wrapper" :class="{'hideSidebar': !sidebar.opened}">
        <side-bar class="sidebar-container" />
        <div class="main-container">
            <div class="fixed-header">
                <my-header class="myHeader-container" />
            </div>
            <app-main />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { AppMain,SideBar,MyHeader } from './components'

export default{
    name: 'Layout',
    components:{
        AppMain,
        SideBar,
        MyHeader
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ])
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.app-wrapper{
    position: relative;
    height: 100%;
    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
        width: calc(100% - #{$sideBarWidth});
        transition: width 0.28s;
    }
}
.app-wrapper.hideSidebar{
    .fixed-header {
        width: calc(100% - #{$sideBarWidth_hide});
    }
}
</style>
