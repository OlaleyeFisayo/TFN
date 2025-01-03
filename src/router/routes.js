const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
    children: [
      {
        path: '',
        component: () => import('layouts/MainLayout.vue'),
        redirect: { name: 'home' },
        children: [
          {
            name: 'home',
            path: 'home',
            component: () => import('pages/Home/HomeIndex.vue'),
          },
          {
            path: 'agent',
            name: 'agent',
            component: () => import('pages/Agent/AgentIndex.vue'),
          },
          {
            path: 'agent/:id',
            name: 'agentDetails',
            component: () => import('pages/Agent/AgentDetail/AgentDetailsIndex.vue'),
          },
        ],
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('pages/Authentication/SignUp/SignUpIndex.vue'),
      },
      {
        name: 'login',
        path: 'login',
        component: () => import('pages/Authentication/SignIn/SignInIndex.vue'),
      },
      {
        name: 'termsofuse',
        path: 'termsofuse',
        component: () => import('pages/TermsOfUse/TermsOfUseIndex.vue'),
      },
      {
        path: 'policy',
        name: 'policy',
        component: () => import('pages/Privacy/PrivacyIndex.vue'),
      },
      {
        path: 'forgotpassword',
        name: 'forgotpassword',
        component: () => import('pages/Authentication/ForgetPassword/ForgetPasswordIndex.vue'),
      },
      {
        path: 'faqs',
        name: 'faqs',
        component: () => import('pages/FAQs/FAQsIndex.vue'),
      },
      {
        path: 'calender',
        name: 'calender',
        component: () => import('pages/Calender/CalenderIndex.vue'),
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
