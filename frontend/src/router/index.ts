import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/projects', name: 'projects', component: ProjectsPage },
  { path: '/contact', name: 'contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
