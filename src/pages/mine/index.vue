<template>
    <div>
        <userInfo />
        <orderInfo />
        <van-divider />
        <van-cell title="我的收货地址" is-link url="/address" />
        <Tabbar />
    </div>
</template>

<script>
import userInfo from './userInfo';
import orderInfo from './orderInfo';

export default {
    name: 'Mine',
    components: {
        userInfo,
        orderInfo
    }
}
</script>