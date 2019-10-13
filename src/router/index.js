import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: () => import('../pages/home') },
    { path: '/home', component: () => import('../pages/home') }, // 首页
    { path: '/mine', component: () => import('../pages/mine') }, // 我的
    { path: '/shop', component: () => import('../pages/shop') }, // 购物车
    { path: '/test', component: () => import('../pages/test') }, // 测试
    { path: '/store', component: () => import('../pages/home/store')}, // 商品
    { path: '/allstore', component: () => import('../pages/home/allstore')}, // 全部商品
    { 
        path: '/address/',
        component: () => import('../pages/mine/address'),
        children: [
            { path: '', component: () => import('../pages/mine/address/list') }, // 收货地址列表
            { path: 'list', component: () => import('../pages/mine/address/list') }, // 收货地址列表
            { path: 'add', component: () => import('../pages/mine/address/add') }, // 添加收货地址
        ]
    }, // 我的收货地址
]

export default new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0}),
    routes
})