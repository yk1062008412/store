import request from '@/utils/request';

export function getUserInfo (params) {
    return request({
        url: 'api/userInfo',
        method: 'post',
        data: params
    });
}