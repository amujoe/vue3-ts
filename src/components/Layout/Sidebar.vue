<template lang="pug">
.sidebar
    .logo-text 管理后台
    a-menu(
        mode="inline"
        theme="dark"
        click="goPage")
        template(v-for="(sub, index) in menuList" :key="index")
            a-sub-menu(v-if="sub.subset && sub.subset.length")
                template(v-slot:title) {{sub.cname}}
                a-menu-item(
                    v-for="(menu, idx) in sub.subset"
                    :key="menu.path"
                    :title="menu.cname"
                ) {{menu.cname}}
            a-menu-item(
                v-else
                :key="sub.path"
                :title="sub.cname"
                ) {{sub.cname}}

</template>


<script lang="ts">
import { Vue } from 'vue-class-component';
import { Menu } from "@/types/menu.ts"
import menuList from "@/data/menu.ts"


export default class Sidebar extends Vue {

    data() {
        return {
            menuList: menuList
        }
    }
    /**
     * 路由跳转页面
     * @param name 路由的name
     */
    goPage(item: Menu, key: string, keyPath: string): void {
        console.log("e", item)
        console.log("e", key)
        console.log("e", keyPath)
    }

}
</script>

<style lang="less" scope>
.sidebar{
    background: #353943;
}
.logo-text{
    text-align: center;
    font-size: 20px;
    line-height: 64px
}
/deep/ .ant-menu-dark,.ant-menu-dark .ant-menu-sub {
    background: red!important;
    color: blue!important;
}

</style>