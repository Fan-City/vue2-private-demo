<template>
    <div class="sidebar-wrapper has-logo" :style="{backgroundColor : variables.menuBg}">
        <div class="logo flex-container">
            <img :src="logo">
        </div>
        <el-scrollbar wrap-class="theme-dark scrollbar-wrapper">
            <el-menu
                :default-active="activeMenu"
                :collapse="isCollapse"
                :unique-opened="true"
                :collapse-transition="false"
                mode="vertical"
            >
                <sidebar-item
                    v-for="(route, index) in sidebarRouters"
                    :key="route.path  + index"
                    :item="route"
                    :base-path="route.path"
                />
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import logo from "@/assets/logo.png";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
export default {
    data(){
        return {
            logo: logo,
            routerData: [],
            sidebarRouters: []
        }
    },
    components: { SidebarItem },
    computed: {
        ...mapGetters([ 'sidebar' ]),
        activeMenu() {
            const route = this.$route;
            const { meta, path } = route;
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            return path;
        },
        isCollapse() {
            return !this.sidebar.opened;
        },
        variables() {
            return variables;
        },
    },
    created(){
        this.sidebarRouters = this.$router.options.routes
    },
    methods: {
    }
}
</script>