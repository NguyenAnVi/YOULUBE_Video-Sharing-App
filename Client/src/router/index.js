import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PlayerView from '@/views/PlayerView.vue';
import WatchView from '@/views/WatchView.vue';
import NotFound from '@/views/NotFound.vue';

import Signin from '@/pages/authentication/Signin.page.vue'
import Signup from '@/pages/authentication/Signup.page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/play',
      name: 'player',
      component: PlayerView
    },
    {
      path: '/watch/:id',
      name: 'watch',
      component: WatchView
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: "/:pathMatch(.*)*",
      name:"not-found",
      component: NotFound
    }
  ]
})

export default router
