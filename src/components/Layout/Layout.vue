<template lang="pug">
a-layout.layout
    a-layout-sider.sidebar
        slot(name="sidebar")
    a-layout
        a-layout-header.layout-header
            span header
            slot(name="header")
        a-layout-content.main
            span main
            slot(name="main")
        a-layout-footer
            span footer
            slot(name="footer")
</template>

<style lang="less">
.layout {
    height: 100vh
}
.sidebar{
    background: #353943!important;
    color: #fff;
}
.main {
    background: #eee!important;
}
.layout-header {
    background: #fff!important;
}

</style>