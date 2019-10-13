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
        <div class="banner-pic">
            <img src="http://img1.imgtn.bdimg.com/it/u=1563980539,1672265910&fm=26&gp=0.jpg" alt="这是一个banner图">
        </div>
        <van-divider class="divider-title">分类</van-divider>
        <div>
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="纸杯" to="/store" />
                <van-grid-item icon="photo-o" text="塑料" to="/store" />
                <van-grid-item icon="photo-o" text="刀子" to="/store" />
                <van-grid-item icon="photo-o" text="叉子" to="/store" />
                <van-grid-item icon="photo-o" text="勺子" to="/store" />
                <van-grid-item icon="photo-o" text="全部" to="/allstore" />
            </van-grid>
        </div>
        <van-divider class="divider-title">品牌</van-divider>
        <div>
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="品牌1" to="/store" />
                <van-grid-item icon="photo-o" text="品牌2" to="/store" />
                <van-grid-item icon="photo-o" text="品牌3" to="/store" />
                <van-grid-item icon="photo-o" text="品牌4" to="/store" />
                <van-grid-item icon="photo-o" text="品牌5" to="/store" />
                <van-grid-item icon="photo-o" text="品牌6" to="/store" />
            </van-grid>
        </div>
        <Tabbar />
    </div>
</template>


<script>
// import Vue from 'vue';
// import { Search, Swipe, SwipeItem, Grid, GridItem, Divider } from 'vant';
import { getUserInfo } from '@/api/common';
// eslint-disable-next-line
// Vue.use(Search).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Divider);

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
