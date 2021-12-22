import {createApp} from 'vue'
import App from './App.vue'
// import elementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

//路由
import * as VueRouter from 'vue-router'
import index from './views/index.vue';
import broadcast from './views/broadcast.vue';
import my from './views/my.vue';
import shopping from './views/shopping.vue';
// import KrakenComponent from './views';
const routes = [
    {path: '/', component: index},
    {path: '/broadcast', component: broadcast},
    {path: '/my', component: my},
    {path: '/shopping', component: shopping},
]

let history = VueRouter.createWebHashHistory();
const router = VueRouter.createRouter({
    history,
    routes,
})

const app = createApp(App);
// app.use(elementUI);
app.use(router);
app.mount(document.body);
