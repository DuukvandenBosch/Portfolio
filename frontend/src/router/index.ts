import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/projects', redirect: { name: 'home', hash: '#work' } },
  { path: '/about', redirect: { name: 'home', hash: '#about' } },
  { path: '/work-log', redirect: { name: 'home', hash: '#journal' } },
  { path: '/journal', redirect: { name: 'home', hash: '#journal' } },
  { path: '/journal/:slug', redirect: { name: 'home', hash: '#journal' } },
  { path: '/activity', redirect: { name: 'home', hash: '#work' } },
  { path: '/contact', redirect: { name: 'home', hash: '#contact' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.name === 'home' ? 'Duuk van den Bosch — Software Engineering' : 'Duuk van den Bosch — Portfolio'
})

export default router
