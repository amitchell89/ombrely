import Vue from 'vue'
import App from './app.vue'
import appFooter from './footer.vue'
require('./css/index.scss');

Vue.component('appFooter',appFooter)

new Vue({
  el: 'app',
  components: { App }
})
