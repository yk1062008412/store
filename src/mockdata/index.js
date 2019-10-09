const Mock = require('mockjs');
// const baseUrl = 'http://localhost:8080/'

Mock.mock(/api\/userInfo/, {
    number: 11,
    type: 11222
});