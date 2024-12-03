import { createRouter, createWebHistory } from 'vue-router'
import PasswordPage from '@/components/PasswordPage.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/password',
    component: PasswordPage
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/project/:alias',
    name: 'ProjectPage',
    component: () => import('../components/ProjectPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/resume',
    name: 'resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: 'about' */ '../views/ResumeView.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:catchAll(.*)',
    meta: { transition: 'slide-up' },
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  }
]

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/password');
  } else {
    next();
  }
});

export default router
