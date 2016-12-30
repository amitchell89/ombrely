import Vue from 'vue'
import App from './app.vue'
import appFooter from './footer.vue'
import appHeader from './header.vue'
require('./css/index.scss');

Vue.component('appFooter',appFooter)
Vue.component('appHeader',appHeader)

const VueClipboards = require('vue-clipboards');
Vue.use(VueClipboards);

new Vue({
  el: 'app',
  components: { App }
})
