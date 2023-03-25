import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MemoriesPageVue from '@/pages/MemoriesPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/memories',
  },
  {
    path: '/memories',
    component: MemoriesPageVue,
  },
  {
    path: '/memories/:id',
    component: () => import('@/pages/MemoryDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
