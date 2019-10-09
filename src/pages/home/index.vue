<template>
    <div>
        this is home page.
        {{ name }}
    </div>
</template>


<script>
import { getUserInfo } from '@/api/common';
export default {
    name: 'home',
    data () {
        return {
            name: 'yk'
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
        }
    }
}
</script>