<template>
  <div class="shell content-page journal-page">
    <div class="page-heading split-heading">
      <div>
        <p class="eyebrow">Activity / 09</p>
        <h1 class="display">Recent<br /><em>signals.</em></h1>
      </div>
      <p class="heading-note">
        A read-only feed of public commit activity from GitHub and the HvA GitLab instance. No credentials are used.
      </p>
    </div>
    <div class="activity-toolbar section-rule">
      <div class="filters" aria-label="Filter activity">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          :class="{ active: platform === filter }"
          @click="platform = filter"
        >
          {{ filter }}
        </button>
      </div>
      <button class="retry-button" type="button" :disabled="loading" @click="loadActivity">
        {{ loading ? 'Loading...' : 'Refresh activity' }}
      </button>
    </div>
    <div v-if="loading" class="project-state">Collecting public commits...</div>
    <div v-else-if="!commits.length" class="project-state">
      <p>No public commit activity is available right now.</p>
      <p class="muted">Check the source profiles for the full history.</p>
      <div class="activity-profiles">
        <a :href="siteConfig.githubUrl" target="_blank" rel="noreferrer">GitHub ↗</a
        ><a :href="siteConfig.gitlabUrl" target="_blank" rel="noreferrer">HvA GitLab ↗</a>
      </div>
    </div>
    <div v-else class="activity-list">
      <article v-for="commit in visibleCommits" :key="commit.id" class="activity-entry">
        <div class="activity-dot" :class="commit.platform.toLowerCase()"></div>
        <div class="activity-entry-body">
          <div class="activity-entry-meta">
            <span class="source-label" :class="commit.platform.toLowerCase()">{{ commit.platform }}</span
            ><time :datetime="commit.date">{{ formatDate(commit.date) }}</time>
          </div>
          <a :href="commit.url" target="_blank" rel="noreferrer" class="activity-message">{{ commit.message }}</a>
          <div class="activity-repository">
            <a :href="commit.repositoryUrl" target="_blank" rel="noreferrer">{{ commit.repository }}</a
            ><span v-if="commit.author">by {{ commit.author }}</span>
          </div>
        </div>
      </article>
    </div>
    <div v-if="errors.length" class="api-note">Some activity sources could not be loaded: {{ errors.join(' · ') }}</div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { siteConfig } from '../config/site'
import { fetchActivity } from '../services/activity'
import type { GitCommit } from '../types/journal'
const commits = ref<GitCommit[]>([])
const errors = ref<string[]>([])
const loading = ref(true)
const platform = ref('All')
const filters = ['All', 'GitHub', 'GitLab']
const visibleCommits = computed(() =>
  commits.value.filter((commit) => platform.value === 'All' || commit.platform === platform.value),
)
async function loadActivity(): Promise<void> {
  loading.value = true
  const result = await fetchActivity()
  commits.value = result.commits
  errors.value = result.errors
  loading.value = false
}
function formatDate(date: string): string {
  return date
    ? new Date(date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
    : 'Date unavailable'
}
onMounted(loadActivity)
</script>
