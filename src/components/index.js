// 底部Tabbar
import Tabbar from './Tabbar/index';
import Storecard from './Storecard/index';
import Shopcard from './Shopcard/index';
import Goods from './Goods/index';

const components = [
    Tabbar,
    Storecard,
    Goods,
    Shopcard
]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install
}