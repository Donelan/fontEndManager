import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
// import '@/permission' // permission control

import Drag from '@/directive/el-dragDialog'
Vue.directive('drag', Drag)
import Wave from '@/directive/waves'
Vue.directive('wave', Wave)
// -----------------
// 导出一个公用的标题
import vTitle from '@/components/VTitle'
Vue.component('vTitle', vTitle)
// 导入分页
import PageList from "@/components/PageList";
Vue.component('PageList', PageList)
//
import formButton from "@/components/Button/formButton";
Vue.component('formButton', formButton)

import * as api from '@/utils/fetch'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.$get = api.get
Vue.prototype.$post = api.post


// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
