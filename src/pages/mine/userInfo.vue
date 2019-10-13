<template>
    <div class="userinfo-container">
        <div class="user-header">
            <img src="http://b-ssl.duitang.com/uploads/item/201707/19/20170719211350_4PnBt.jpeg" alt="">
        </div>
        <div class="user-nickname">用户昵称</div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo'
}
</script>

<style lang="less" scoped>
.userinfo-container{
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #dcdfe6;
    .user-header{
        width: 75px;
        height: 75px;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .user-nickname{
        flex: 1;
        margin-left: 20px;
    }
}
    
</style>
