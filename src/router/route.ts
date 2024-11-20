import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "signUp",
    component: () => import("src/pages/Authentication/SignUp/SignUpIndex.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("src/pages/Authentication/SignIn/SignInIndex.vue"),
  },
  {
    path: "/forgotpassword",
    name: "forgotPassword",
    component: () =>
      import("src/pages/Authentication/ForgotPassword/ForgotPasswordIndex.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
