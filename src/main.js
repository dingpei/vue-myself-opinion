// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
// import Cube from 'cube-ui' // 一般直接放在这个位置

import App from './App'
import router from './router'
import "../static/css/reset.css"
import $ from 'jquery'
//全局一劳永逸的住注册组件
import './utils/global.js'

import Vuex from 'vuex'
Vue.use(Vuex)

import utils from './utils/utils.js'
Vue.prototype.utils = utils

import store from './vuex/store'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
