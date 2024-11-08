import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";
import IndexPage from "pages/IndexPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: IndexPage,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
