import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//lenguaje

Vue.config.productionTip = false
/*
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')*/

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    // Prevent blank screen in Electron builds
     this.$router.push('/')
  }
}).$mount('#app')