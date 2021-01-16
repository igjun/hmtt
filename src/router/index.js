import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/',
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: '/hemo',
        component: () => import('../views/layout/hemo.vue'),
      },
      {
        path: '/qa',
        component: () => import('../views/layout/qa.vue'),
      },
      {
        path: '/my',
        component: () => import('../views/layout/my.vue'),
      },
      {
        path: '/video',
        component: () => import('../views/layout/video.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
