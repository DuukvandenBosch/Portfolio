<template>
  <div class="shell content-page journal-page">
    <div class="page-heading split-heading">
      <div>
        <p class="eyebrow">Sprint journal / 08</p>
        <h1 class="display">Notes from<br /><em>the sprints.</em></h1>
      </div>
      <p class="heading-note">
        Longer-form notes on goals, trade-offs, technical challenges, and the lessons that only show up after shipping.
      </p>
    </div>
    <div class="article-list">
      <article v-for="article in sortedArticles" :key="article.slug" class="article-preview">
        <div class="article-number mono">S{{ String(article.number).padStart(2, '0') }}</div>
        <div>
          <div class="article-meta">
            <span>{{ formatRange(article.startDate, article.endDate) }}</span
            ><span v-if="article.placeholder" class="status-pill">Example content</span>
          </div>
          <h2>{{ article.title }}</h2>
          <p>{{ article.summary }}</p>
          <RouterLink :to="`/journal/${article.slug}`" class="text-link">Read sprint notes ↗</RouterLink>
        </div>
      </article>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { sprintArticles } from '../data/journal'
const sortedArticles = computed(() => [...sprintArticles].sort((a, b) => b.endDate.localeCompare(a.endDate)))
function formatRange(start: string, end: string): string {
  return `${start} — ${end}`
}
</script>
