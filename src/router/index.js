import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CustomerCreate from '../views/CustomerCreate.vue'
import CustomerDetail from '../views/CustomerDetail.vue'
import Update from '../views/Update.vue'
import CareplanHome from '../views/CareplanHome.vue'
import CareplanCreate from '../views/CareplanCreate.vue'
import CareplanDetail from '../views/CareplanDetail.vue'
import CareplanUpdate from '../views/CareplanUpdate.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customercreate',
    name: 'customercreate',
    component: CustomerCreate
  },
  {
    path: '/customer/:id',
    name: 'customer',
    component: CustomerDetail
  },
  {
    path: '/update/:id',
    name: 'update',
    component: Update
  },
  {
    path: '/customer/:id/careplanhome',
    name: 'careplanhome',
    component: CareplanHome
  },
  {
    path: '/customer/:id/careplancreate',
    name: 'careplancreate',
    component: CareplanCreate
  },
  {
    path: '/customer/:id/careplan/:idd',
    name: 'careplan',
    component: CareplanDetail
  },
  {
    path: '/customer/:id/careplanupdate/:idd',
    name: 'careplanupdate',
    component: CareplanUpdate
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
