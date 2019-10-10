// 底部Tabbar
import Tabbar from './Tabbar/index';

const components = [
    Tabbar
]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install
}