import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'
import VueDateFns from "vue-date-fns";

Vue.use(VueDateFns);

Vue.use(firestorePlugin)
firebase.initializeApp({

})
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
