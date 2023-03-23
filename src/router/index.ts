import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MemoriesPage from "@/pages/MemoriesPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    component: MemoriesPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
