import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("pages/Authentication/SignUp/SignUpIndex.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/Authentication/SignIn/SignInIndex.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
