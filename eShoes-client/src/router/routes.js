const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginPageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginIndex.vue') }
    ]
  },
  {
    path: '/Administration',
    component: () =>
   import('layouts/AdminLayout.vue'),
    meta: { auth: true },
    children: [
    {
    path: '/products',
    meta: { auth: true },
    component: () =>
   import('pages/ProductPage.vue')
  }
    ]
    },
  {
    path: '/main',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '/home', meta: { auth: true }, component: () => import('pages/HomePage.vue') },
      { path: '/products', meta: { auth: true }, component: () => import('pages/ProductPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
