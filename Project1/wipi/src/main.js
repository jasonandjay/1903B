import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局样式
import '@/scss/common.scss';
// 注册全局过滤器
import * as filters from '@/filters'
// 引入viewjs的样式
import 'viewerjs/dist/viewer.css'
// 引入国际化
import VueI18n from 'vue-i18n';
// 引入自定义国际化配置message
import messages from '@/lang/index';


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.config.productionTip = false;

const localeMap = {
  'zh-CN': 'zh',
  'zh': 'zh',
  'en-US': 'en',
  'en': 'en'
}
const defaultLocale = localeMap[navigator.language] || 'zh';
const i18n = new VueI18n({
  locale: defaultLocale, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages
})

new Vue({
  router,
  store,
  i18n,
  // template: '<App/>',
  render: h => h(App)
}).$mount('#app')
