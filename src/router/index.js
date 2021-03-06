/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Store from '@/components/Store.vue'
import newStore from '@/components/newStore.vue'
import StoreDetails from '@/components/StoreDetails.vue'

import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/newstore',
    component: newStore,
  },
  {
    path:'/newstore/details',
    component: StoreDetails,
  },
  {
    name:store,
    path: '/store/:storeId',
    component: Store,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
