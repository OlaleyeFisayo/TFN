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
      {
        path: 'home-improvement',
        name: 'home-improvement',
        component: () => import('pages/HomeImprovement/HomeImprovementIndex.vue'),
      },
      {
        path: 'home-improvement/:id',
        name: 'home-improvement-details',
        component: () =>
          import('pages/HomeImprovement/HomeImprovementDetails/HomeImprovementDetailsIndex.vue'),
      },
      {
        path: 'property-manager',
        name: 'property-manager',
        component: () => import('pages/PropertyManager/PropertyManagerIndex.vue'),
      },
      {
        path: 'property-manager/:id',
        name: 'property-manager-details',
        component: () =>
          import('pages/PropertyManager/PropertyManagerDetail/PropertyManagerDetailIndex.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('pages/Home/SearchResult/SearchResultIndex.vue'),
      },
      {
        path: 'post-request',
        name: 'post-request',
        component: () => import('pages/PostRequest/PostRequestIndex.vue'),
      },
      {
        path: 'rent-property',
        name: 'rent-property',
        component: () => import('pages/RentProperty/RentPropertyIndex.vue'),
      },
      {
        path: 'buy-property',
        name: 'buy-property',
        component: () => import('pages/BuyProperty/BuyPropertyIndex.vue'),
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
