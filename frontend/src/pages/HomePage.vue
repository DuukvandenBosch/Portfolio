<template>
  <div class="shell home-page">
    <section class="home-hero">
      <div>
        <p class="eyebrow">Software engineering / 01</p>
        <h1 class="display">Duuk van<br /><em>den Bosch.</em></h1>
        <p class="hero-kicker">Software Engineering student & developer</p>
      </div>
      <div class="hero-aside">
        <p>
          I build useful software with a focus on backend systems, APIs, and the details that make products dependable.
        </p>
        <div class="hero-meta">
          <span class="mono">Based in Amsterdam</span><span class="mono">Java / TypeScript / Vue</span>
        </div>
        <div class="actions">
          <RouterLink to="/projects" class="button accent">Explore projects <span>↗</span></RouterLink
          ><RouterLink to="/contact" class="text-link">Contact me ↗</RouterLink>
        </div>
      </div>
    </section>
    <section class="home-intro section-rule">
      <p class="eyebrow">A considered approach</p>
      <p class="intro-copy">
        I like understanding how things work, then making them work better. Clear interfaces, maintainable code, and
        software that solves a real need.
      </p>
    </section>
    <section class="home-projects" aria-labelledby="home-projects-title">
      <div class="section-heading">
        <p class="eyebrow">Selected repositories / 02</p>
        <RouterLink to="/projects" class="text-link">View all work ↗</RouterLink>
      </div>
      <h2 id="home-projects-title" class="section-title">Built with<br /><em>intent.</em></h2>
      <div v-if="projects.length" class="featured-grid">
        <article
          v-for="(project, index) in projects.slice(0, 3)"
          :key="project.id"
          class="featured-project"
          :class="`featured-project--${index + 1}`"
        >
          <div class="featured-project-top">
            <span class="mono">0{{ index + 1 }} / {{ project.source }}</span
            ><span class="featured-links"
              ><a :href="project.url" target="_blank" rel="noreferrer" :aria-label="`Open ${project.name} repository`"
                >↗</a
              ><a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noreferrer"
                :aria-label="`Open ${project.name} live demo`"
                >◌</a
              ></span
            >
          </div>
          <h3>{{ project.name }}</h3>
          <p>
            {{
              project.featured?.intro || project.description || 'Repository details available on the source platform.'
            }}
          </p>
          <div class="tag-list">
            <span v-if="project.language">{{ project.language }}</span
            ><span v-for="topic in project.topics.slice(0, 3)" :key="topic">{{ topic }}</span>
          </div>
        </article>
      </div>
      <p v-else class="project-state">Live repositories will appear here when available.</p>
    </section>
    <section class="home-bottom">
      <div>
        <p class="eyebrow">Currently exploring</p>
        <p class="muted">TypeScript · Python · React · REST APIs</p>
      </div>
      <RouterLink to="/about" class="text-link">More about me ↗</RouterLink>
    </section>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchProjects } from '../services/projects'
import type { Project } from '../types/project'
const projects = ref<Project[]>([])
onMounted(async () => {
  projects.value = (await fetchProjects()).projects
})
</script>
