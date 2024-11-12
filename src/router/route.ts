import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("pages/Authentication/SignUp/SignUpIndex.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
