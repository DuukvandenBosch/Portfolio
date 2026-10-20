<template>
  <div class="shell projects-page">
    <div class="page-heading projects-heading">
      <div>
        <p class="eyebrow">Selected work / 03</p>
        <h1 class="display">Things I’ve<br /><em>made.</em></h1>
      </div>
      <p class="heading-note">
        A live collection from GitHub and HvA GitLab. Repository metadata is fetched directly from each platform.
      </p>
    </div>
    <div class="project-toolbar section-rule">
      <label class="search-field"
        ><span class="sr-only">Search projects</span
        ><input v-model="search" type="search" placeholder="Search projects..."
      /></label>
      <div class="filters" aria-label="Filter projects">
        <button
          v-for="filter in sourceFilters"
          :key="filter"
          :class="{ active: source === filter }"
          type="button"
          @click="source = filter"
        >
          {{ filter }}
        </button>
      </div>
    </div>
    <div v-if="loading" class="project-state"><span class="loader"></span>Collecting repositories...</div>
    <div v-else-if="!projects.length" class="project-state">
      <p>No repositories found right now.</p>
      <p class="muted">The public APIs may be unavailable. Try again later or check the profile links.</p>
    </div>
    <div v-else class="project-list">
      <article v-for="(project, index) in filteredProjects" :key="project.id" class="project-row">
        <div class="project-number mono">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="project-main">
          <div class="project-title">
            <h2>{{ project.name }}</h2>
            <span class="source-label" :class="project.source.toLowerCase()">{{ project.source }}</span>
          </div>
          <p>{{ project.description || 'No description provided for this repository.' }}</p>
          <div class="tag-list">
            <span v-if="project.language">{{ project.language }}</span
            ><span v-for="topic in project.topics.slice(0, 4)" :key="topic">{{ topic }}</span>
          </div>
        </div>
        <a
          class="project-link"
          :href="project.url"
          target="_blank"
          rel="noreferrer"
          :aria-label="`Open ${project.name} repository`"
          >↗</a
        >
      </article>
    </div>
    <div v-if="errors.length" class="api-note">Some sources could not be loaded: {{ errors.join(' · ') }}</div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { fetchProjects } from '../services/projects'
import { type Project } from '../types/project'
const projects = ref<Project[]>([])
const loading = ref(true)
const errors = ref<string[]>([])
const search = ref('')
const source = ref('All')
const sourceFilters = ['All', 'GitHub', 'GitLab']
const filteredProjects = computed(() =>
  projects.value.filter(
    (project) =>
      (source.value === 'All' || project.source === source.value) &&
      `${project.name} ${project.description} ${project.language ?? ''} ${project.topics.join(' ')}`
        .toLowerCase()
        .includes(search.value.toLowerCase()),
  ),
)
onMounted(async () => {
  const result = await fetchProjects()
  projects.value = result.projects
  errors.value = result.errors
  loading.value = false
})
</script>
