import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/home', component: () => import('../pages/home') }, // 首页
    { path: '/mine', component: () => import('../pages/mine') }, // 我的
    { path: '/shop', component: () => import('../pages/shop') }, // 购物车
    { path: '/test', component: () => import('../pages/test') }, //测试
    { path: '/store',component: () => import('../pages/home/store')} // 商品
]

export default new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0}),
    routes
})