/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Store from '@/components/Store.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
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
