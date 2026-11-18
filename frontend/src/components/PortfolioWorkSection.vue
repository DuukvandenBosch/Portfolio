<template>
  <section id="work" data-section class="portfolio-section work-section">
    <div class="section-head work-section__head">
      <span class="section-label">02 / Selected focus</span>
      <h2>Work, in systems.</h2>
      <p>Two connected fields of practice. Specific project names and repository links can be added when supplied.</p>
    </div>
    <div class="work-studies">
      <article v-for="(study, index) in studies" :key="study.title" class="work-study">
        <button class="work-study__trigger" type="button" :aria-expanded="openStudy === index" @click="openStudy = openStudy === index ? -1 : index">
          <span class="work-study__top"><span>Case / 0{{ index + 1 }}</span><span>DVDB.SYS</span></span>
          <span class="work-study__number">0{{ index + 1 }}</span>
          <span class="work-study__hint">Structure → interaction</span>
        </button>
        <div class="work-study__content">
          <span class="work-study__index">/0{{ index + 1 }}</span>
          <div class="work-study__copy">
            <span class="section-label">{{ study.label }}</span>
            <h2>{{ study.title }}</h2>
            <p>{{ study.description }}</p>
            <a v-if="study.repositoryUrl" class="text-link" :href="study.repositoryUrl" target="_blank" rel="noreferrer">Explore study ↗</a>
            <span v-else class="text-link text-link--disabled">Explore study</span>
          </div>
          <ul class="technology-list" aria-label="Technologies">
            <li v-for="technology in study.technologies" :key="technology">{{ technology }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { currentProjects } from '../data/journal'
import { fetchProjects } from '../services/projects'
import type { Project } from '../types/project'

const openStudy = ref(0)
const projects = ref<Project[]>([])
const studies = computed(() => [
  {
    label: 'Software engineering / API development',
    title: 'Backend Systems',
    description: 'Server-side systems shaped around clear contracts, maintainable domain logic and dependable data flows.',
    technologies: ['Java', 'Spring Boot', 'SQL', 'REST APIs'],
    repositoryUrl: projects.value.find((project) => project.language === 'Java')?.url || currentProjects[0]?.repositoryUrl,
  },
  {
    label: 'Frontend engineering / interaction',
    title: 'Digital Experiences',
    description: 'Responsive interfaces where strong visual decisions meet clear component architecture and usable interaction.',
    technologies: ['TypeScript', 'JavaScript', 'Vue.js', 'PHP'],
    repositoryUrl: projects.value.find((project) => ['TypeScript', 'JavaScript'].includes(project.language || ''))?.url,
  },
])
onMounted(async () => { projects.value = (await fetchProjects()).projects })
</script>
