<template>
    <div>
        <van-goods-action class="goods-container">
            <div class="goods-left">
                <van-icon name="shopping-cart" class="goods-shop" />
                <div class="goods-state">
                    <div class="goods-state-number">共5件商品</div>
                    <div class="goods-state-price">总价 ¥100</div>
                </div>
            </div>
            <van-goods-action-button type="warning" text="加入购物车" @click="addShopBtn" />
            <van-goods-action-button type="danger" text="立即购买" @click="buyNowBtn" />
        </van-goods-action>
    </div>
</template>

<script>
export default {
    name: 'Goods',
    methods: {
        addShopBtn () {
            // eslint-disable-next-line
            console.log('加入购物车');
        },
        buyNowBtn () {
            // eslint-disable-next-line
            console.log('立即购买');
        }
    },
}
</script>
<style lang="less" scoped>
    .goods-container{
        padding: 10px 0;
        border-top: 1px solid #DCDFE6;
        .goods-left{
            width: 40%;
            padding-left: 20px;
            display: flex;
            align-items: center;
            .goods-shop{
                font-size: 25px;
            }
            .goods-state{
                margin-left: 20px;
                .goods-state-number{
                    font-size: 14px;
                    color: #5677FC;
                }
                .goods-state-price{
                    font-size: 16px;
                    color: #ff7500;
                }
            }
        }
    }
</style>