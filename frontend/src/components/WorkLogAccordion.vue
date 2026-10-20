<template>
  <details class="work-log-disclosure">
    <summary>
      <span class="timeline-date"
        ><span class="mono">{{ entry.date }}</span
        ><strong>{{ entry.project }}</strong></span
      >
      <span class="work-log-preview"
        ><span v-if="entry.placeholder" class="status-pill">Sample content</span
        ><strong>{{ entry.title || entry.tasks[0] }}</strong
        ><span>{{ entry.summary || entry.tasks[0] }}</span></span
      >
      <span class="disclosure-icon" aria-hidden="true">+</span>
    </summary>
    <div class="work-log-detail">
      <p v-if="entry.relatedSprint" class="mono">Related sprint: {{ entry.relatedSprint }}</p>
      <div class="log-details">
        <div v-if="entry.context">
          <p class="eyebrow">Context</p>
          <p>{{ entry.context }}</p>
        </div>
        <div v-if="entry.goal">
          <p class="eyebrow">Goal</p>
          <p>{{ entry.goal }}</p>
        </div>
        <div v-if="entry.approach">
          <p class="eyebrow">Approach & design</p>
          <p>{{ entry.approach }}</p>
        </div>
        <div v-if="entry.implementation">
          <p class="eyebrow">Implementation</p>
          <p>{{ entry.implementation }}</p>
        </div>
        <div v-if="entry.challenges?.length">
          <p class="eyebrow">Challenges</p>
          <ul>
            <li v-for="item in entry.challenges" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div v-if="entry.decisions?.length">
          <p class="eyebrow">Decisions</p>
          <ul>
            <li v-for="item in entry.decisions" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div v-if="entry.result">
          <p class="eyebrow">Result</p>
          <p>{{ entry.result }}</p>
        </div>
        <div v-if="entry.learned || entry.reflection">
          <p class="eyebrow">Reflection</p>
          <p>{{ entry.learned }} {{ entry.reflection }}</p>
        </div>
        <div v-if="entry.nextSteps?.length">
          <p class="eyebrow">Next steps</p>
          <ul>
            <li v-for="item in entry.nextSteps" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
      <JournalImages :images="entry.images" />
      <div class="tag-list">
        <span v-for="technology in entry.technologies" :key="technology">{{ technology }}</span>
      </div>
      <div v-if="entry.links?.length" class="entry-links">
        <a v-for="link in entry.links" :key="link.url" :href="link.url" target="_blank" rel="noreferrer"
          >{{ link.label }} ↗</a
        >
      </div>
    </div>
  </details>
</template>
<script setup lang="ts">
import type { WorkLogEntry } from '../types/journal'
import JournalImages from './JournalImages.vue'
defineProps<{ entry: WorkLogEntry }>()
</script>
