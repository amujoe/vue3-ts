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

