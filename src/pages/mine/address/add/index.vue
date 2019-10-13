<template>
    <div>
        <h4 class="address-add-title">添加收货地址</h4>
        <van-divider />
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
import areaList from '@/utils/area.js';

export default {
    name: 'Add',
    data() {
        return {
            areaList,
            searchResult: []
        }
    },
    methods: {
        onSave () {
            // eslint-disable-next-line
            console.log('保存地址');
        },
        onDelete () {
            // eslint-disable-next-line
            console.log('删除地址');
        },
        onChangeDetail (val) {
            if (val) {
                this.searchResult = [{
                    name: '黄龙万科中心',
                    address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .address-add-title{
        text-align: center;
    }
</style>
