import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AddSignature from '../views/AddSignature.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'Home',
    },
    {
      path: '/add-signature',
      component: AddSignature,
      name: 'add-signature',
    },
  ],
});

export default router;
