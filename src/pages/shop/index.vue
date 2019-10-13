<template>
    <div class="store-container">
        <van-sticky class="store-state">
            <div class="store-header">
                <div class="store-header-title">购物车</div>
                <div class="store-header-setting">管理</div>
            </div>
            <div class="store-state-quantity">共12件商品</div>
        </van-sticky>
        <div class="goods-list">
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
            <Shopcard />
        </div>
        <van-submit-bar
            :price="3050"
            button-text="立即购买"
            @submit="onSubmit"
            class="store-submit"
        >
            <van-checkbox v-model="checked" class="store-submit-checkall">全选</van-checkbox>
        </van-submit-bar>
        <Tabbar />
    </div>
</template>

<script>
export default {
    name: 'Shop',
    data() {
        return {
            checked: false
        }
    },
    methods: {
        onSubmit () {
            // eslint-disable-next-line
            console.log('submit order');
        }
    },
}
</script>

<style lang="less" scoped>
.store-container{
    .store-state{
        .store-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 10px;
            height: 50px;
            z-index: 1;
            background-color: #ffffff;
            .store-header-title{
                font-size: 18px;
            }
        }
        .store-state-quantity{
            background-color: #ffffff;
        }
    }
    
    .goods-list{
        padding-bottom: 110px;
    }
    .store-submit{
        bottom: 50px;
        .store-submit-checkall{
            margin-left: 10px;
        }
    }
}
</style>
