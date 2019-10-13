<template>
    <div>
        <div class="banner-pic">
            <img src="http://img1.imgtn.bdimg.com/it/u=1563980539,1672265910&fm=26&gp=0.jpg" alt="这是一个banner图">
        </div>
        <Storecard />
        <Storecard />
        <Storecard />
        <Storecard />
        <Storecard />
        <Storecard />
        <Storecard />
        <Goods />
    </div>
</template>

<script>
export default {
    name: 'Store'
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
</style>