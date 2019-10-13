<template>
    <div class="order-info">
        <div class="order-info-header">
            <div class="my-order">我的订单</div>
            <div class="check-all-order">查看全部订单&gt;</div>
        </div>
        <van-grid>
            <van-grid-item icon="photo-o" text="待付款" />
            <van-grid-item icon="photo-o" text="待发货" />
            <van-grid-item icon="photo-o" text="待收货" />
            <van-grid-item icon="photo-o" text="已完成" />
        </van-grid>
    </div>
</template>

<script>
export default {
    name: 'OrderInfo'
}
</script>

<style lang="less" scoped>
.order-info{
    margin: 20px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 15px;
    overflow: hidden;
    .order-info-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;
        .check-all-order{
            color: #777777;
        }
    }
}
</style>