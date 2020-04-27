import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'//css初始化
//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//全局样式
import '@/styles/index.scss'
import './icons'

import './permission'
Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
    const { mockXHR } = require('../mock')
    mockXHR()
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
