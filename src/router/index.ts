import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import Posts from '../views/Posts.vue'
import PostDetails from '../views/PostDetails.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {path: '/posts/:slug', name: 'PostDetails', component: PostDetails},
    {path: '/posts/', name: 'Posts', component: Posts},
    {path: '/demo/', name: 'Demo', component: Demo},

  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
