import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 做了 antd 的局部, 为了开发方便, 还是先全部引用了
// import { 
//     Button, 
// } from 'ant-design-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import "@/styles/antd-theme.less";

const app = createApp(App);
app.use(store)
app.use(router)

app.use(Antd)
// app.use(Button)

app.mount('#app')
