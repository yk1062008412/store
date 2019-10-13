<template>
    <div class="storecard-container">
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
            <div slot="tags">
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
            </div>
            <div slot="footer">
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
            </div>
        </van-card>
    </div>
</template>

<script>
// import Vue from 'vue';
// import { Card } from 'vant';
// Vue.use(Card);

export default {
    name: 'Storecard'
}
</script>

<style lang="less">
    .storecard-container{
        &:not(:last-child){
            border-bottom: 1px solid #DCDFE6;
        }
    }
</style>
