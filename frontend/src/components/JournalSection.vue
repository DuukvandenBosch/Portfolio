<template>
  <section id="journal" data-section class="portfolio-section journal-section">
    <div class="journal-section__heading"><span class="section-label">05 / Development journal</span><h2>Notes from<br />the process.</h2><p>A living archive for sprint articles, worklogs and implementation updates.</p></div>
    <div class="journal-list">
      <article v-for="(entry, index) in entries" :key="entry.id" class="journal-entry">
        <button class="journal-entry__trigger" type="button" :aria-expanded="openEntry === index" @click="openEntry = openEntry === index ? -1 : index">
          <span>LOG—0{{ index + 1 }}</span><strong>{{ entry.title }}</strong><em>{{ entry.meta }}</em><b>{{ openEntry === index ? '−' : '+' }}</b>
        </button>
        <div v-if="openEntry === index" class="journal-entry__body"><p>{{ entry.summary }}</p><p v-if="entry.source">{{ entry.source }}</p><span>Entry framework / content ready</span></div>
      </article>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { workLogEntries } from '../data/journal'
const openEntry = ref(0)
const entries = computed(() => [
  { id: 'brief', title: 'From brief to system', meta: 'Process note', summary: 'Breaking a development brief into domain decisions, interface contracts and small, testable implementation steps.', source: workLogEntries[0]?.summary },
  { id: 'sprints', title: 'Building through sprints', meta: 'Sprint practice', summary: 'Using short feedback loops to make progress visible, surface technical questions early and keep scope deliberate.', source: workLogEntries[3]?.summary },
  { id: 'record', title: 'The implementation record', meta: 'Worklog', summary: 'Documenting choices, trade-offs and unresolved questions so that the work remains understandable beyond the code.', source: workLogEntries[5]?.summary },
])
</script>
