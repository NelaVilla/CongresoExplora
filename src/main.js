import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Firebase from 'firebase'
import FirebaseConfig from "./config/firebaseconfig";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAnalytics from 'vue-analytics';
 

Vue.config.productionTip = false
Firebase.initializeApp(FirebaseConfig);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Configuration VueAnalytics
  Vue.use(VueAnalytics, {
  id: 'UA-174541795-1'
});  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
