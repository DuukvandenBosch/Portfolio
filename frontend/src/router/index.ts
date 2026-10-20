import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import WorkLogPage from '../pages/WorkLogPage.vue'
import JournalPage from '../pages/JournalPage.vue'
import SprintArticlePage from '../pages/SprintArticlePage.vue'
import ActivityPage from '../pages/ActivityPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/projects', name: 'projects', component: ProjectsPage },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/work-log', name: 'work-log', component: WorkLogPage },
  { path: '/journal', name: 'journal', component: JournalPage },
  { path: '/journal/:slug', name: 'sprint-article', component: SprintArticlePage },
  { path: '/activity', name: 'activity', component: ActivityPage },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  document.title =
    to.name === 'home'
      ? 'Duuk van den Bosch — Software Engineering'
      : `${String(to.name).replace('-', ' ')} — Duuk van den Bosch`
})

export default router
