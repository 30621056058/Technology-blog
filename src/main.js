// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'bootstrap' 
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap'
import "@/assets/css/registered.css"

// import  'jquery'
import $ from 'jquery'

import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);



Vue.config.productionTip = false
import { Button } from 'vant';

Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
