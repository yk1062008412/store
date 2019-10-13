<template>
    <div class="allstore-container">
        <div class="allstore-column">
            <van-sticky>
                <h4>全部分类</h4>
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="纸杯" />
                    <van-sidebar-item title="刀子" />
                    <van-sidebar-item title="叉子" />
                    <van-sidebar-item title="其他" />
                </van-sidebar>
            </van-sticky>
        </div>
        <div class="allstore-list">
            <Storecard />
            <Storecard />
            <Storecard />
            <Storecard />
            <Storecard />
            <Storecard />
            <Storecard />
            <Storecard />
            <Storecard />
            <Storecard />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Allstore',
    data() {
        return {
            activeKey: 0
        }
    },
}
</script>

<style lang="less">
    .allstore-container{
        display: flex;
        .allstore-column{
            width: 25%;
        }
        .allstore-list{
            flex: 1;
        }
    }
</style>
