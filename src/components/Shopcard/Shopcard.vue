<template>
    <div class="shopcard-container">
        <div class="shopcard-check">
            <van-checkbox v-model="checked"></van-checkbox>
        </div>
        <div class="shopcard-goods">
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"  
                title="商品标题11"
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
    </div>
</template>

<script>
// import Vue from 'vue';
// import { Card } from 'vant';
// Vue.use(Card);

export default {
    name: 'Shopcard',
    data() {
        return {
            checked: false
        }
    },
}
</script>

<style lang="less">
    .shopcard-container{
        background-color: #fafafa;
        display: flex;
        align-items: center;
        .shopcard-check{
            padding-left: 10px;
        }
        .shopcard-goods{
            flex: 1;
        }
        &:not(:last-child){
            border-bottom: 1px solid #DCDFE6;
        }
    }
</style>
