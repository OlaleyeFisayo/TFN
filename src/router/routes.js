const routes = [
  {
    path: '/',
    redirect: { name: 'signup' },
    children: [
      {
        name: 'signup',
        path: '',
        component: () => import('pages/Authentication/SignUp/SignUpIndex.vue'),
      },
      {
        name: 'signin',
        path: 'login',
        component: () => import('pages/Authentication/SignIn/SignInIndex.vue'),
      },
      {
        name: 'termsofuse',
        path: 'termsofuse',
        component: () => import('pages/TermsOfUse/TermsOfUseIndex.vue'),
      },
      {
        path: '/policy',
        name: 'policy',
        component: () => import('pages/Privacy/PrivacyIndex.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
