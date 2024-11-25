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
  {
    path: "/termsofuse",
    name: "termsOfUse",
    component: () => import("src/pages/TermsOfUse/TermsOfUseIndex.vue"),
  },
  {
    path: "/policy",
    name: "policy",
    component: () => import("src/pages/Privacy/PrivacyIndex.vue"),
  },
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    redirect: { name: "home" },
    children: [
      {
        name: "home",
        path: "/home",
        component: () => import("src/pages/Home/HomeIndex.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
