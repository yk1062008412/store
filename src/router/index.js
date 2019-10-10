import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: () => import('../pages/home') },
    { path: '/home', component: () => import('../pages/home') },
    { path: '/mine', component: () => import('../pages/mine') },
    { path: '/shop', component: () => import('../pages/shop') },
    { path: '/test', component: () => import('../pages/test') }
]

export default new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0}),
    routes
})