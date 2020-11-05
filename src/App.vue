<template lang="pug">
layout
  template(v-slot:sidebar)
    sidebar
  template(v-slot:header)
    header
  template(v-slot:main)
    router-view
  template(v-slot:footer)
    footer
  
</template>

<!--
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/list">List</router-link> | 
    <router-link to="/render">Render</router-link> | 
    <router-link to="/setup">Setup</router-link> | 
    <router-link to="/next-tick">NextTick</router-link>
  </div>
  
  <router-view/>
</template>
-->

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Layout from '@/components/Layout/Layout.vue'; // @ is an alias to /src
import Header from '@/components/Layout/Header.vue'; // @ is an alias to /src
import Sidebar from '@/components/Layout/Sidebar.vue'; // @ is an alias to /src
import Footer from '@/components/Layout/Footer.vue'; // @ is an alias to /src

@Options({
  components: {
    Layout,
    Header,
    Sidebar,
    Footer
  },
})
export default class Home extends Vue {}
</script>


<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@primary-color: #1890ff; // 全局主色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: rgba(0, 0, 0, 0.65); // 主文本色
@text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
@disabled-color: rgba(0, 0, 0, 0.25); // 失效色
@border-radius-base: 4px; // 组件/浮层圆角
@border-color-base: #d9d9d9; // 边框色
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
</style>
