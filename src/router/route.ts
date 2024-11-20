import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "signUp",
    component: () => import("pages/Authentication/SignUp/SignUpIndex.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("pages/Authentication/SignIn/SignInIndex.vue"),
  },
  {
    path: "/forgotpassword",
    name: "forgotPassword",
    component: () =>
      import("pages/Authentication/ForgotPassword/ForgotPasswordIndex.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
