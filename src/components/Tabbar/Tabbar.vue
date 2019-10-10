<template>
    <div>
        <van-tabbar route>
            <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/test" icon="home-o">测试</van-tabbar-item>
            <van-tabbar-item replace to="/shop" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="user-circle-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

// import { Tabbar, TabbarItem } from 'vant';
// export default {
//     name: 'Tabbar',
//     components: {
//         [Tabbar.name]: Tabbar,
//         [TabbarItem.name]: TabbarItem
//     }
// }
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
    name: 'Tabbar'
}
</script>