<template>
    <div>
        <div class="search-param">
            <form action="/">
                <van-search
                    v-model="searchText"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </form>
        </div>
        <!-- <div class="swiper-container">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div> -->
        <div class="banner-pic">
            <img src="http://img1.imgtn.bdimg.com/it/u=1563980539,1672265910&fm=26&gp=0.jpg" alt="这是一个banner图">
        </div>
        <van-divider class="divider-title">分类</van-divider>
        <div>
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="纸杯" />
                <van-grid-item icon="photo-o" text="塑料" />
                <van-grid-item icon="photo-o" text="刀子" />
                <van-grid-item icon="photo-o" text="叉子" />
                <van-grid-item icon="photo-o" text="勺子" />
                <van-grid-item icon="photo-o" text="套装" />
            </van-grid>
        </div>
        <van-divider class="divider-title">品牌</van-divider>
        <div>
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="品牌1" />
                <van-grid-item icon="photo-o" text="品牌2" />
                <van-grid-item icon="photo-o" text="品牌3" />
                <van-grid-item icon="photo-o" text="品牌4" />
                <van-grid-item icon="photo-o" text="品牌5" />
                <van-grid-item icon="photo-o" text="品牌6" />
            </van-grid>
        </div>
        <Tabbar />
    </div>
</template>


<script>
import Vue from 'vue';
import { Search, Swipe, SwipeItem, Grid, GridItem, Divider } from 'vant';
import { getUserInfo } from '@/api/common';
// eslint-disable-next-line
Vue.use(Search).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Divider);

export default {
    name: 'Home',
    components: {
    },
    data () {
        return {
            name: 'yk',
            searchText: ''
        }
    },
    watch: {

    },
    mounted () {
        this.getUserInfo();
    },
    methods: {
        getUserInfo () {
            // eslint-disable-next-line
            // console.info('get user info function');
            getUserInfo({}).then(data => {
                // eslint-disable-next-line
                console.log(data);
            })
        },
        onSearch (val) {
            // eslint-disable-next-line
            console.log(val);
        },
        onCancel () {
            this.searchText = '';
        }
    }
}
</script>

<style lang="less" scoped>
.banner-pic{
    width: 100%;
    height: 100px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
}
.divider-title{
    color: #1989fa;
    border-color: #1989fa;
    padding: 0 16px;
}
</style>
