<template>
  <div class="shell content-page journal-page">
    <div class="page-heading split-heading">
      <div>
        <p class="eyebrow">Work log / 07</p>
        <h1 class="display">The work<br /><em>behind it.</em></h1>
      </div>
      <p class="heading-note">
        A chronological development log documenting context, decisions, experiments, implementation, and reflection.
        Entries open independently so the timeline stays readable as the semester grows.
      </p>
    </div>
    <div class="log-toolbar section-rule">
      <label class="search-field"
        ><span class="sr-only">Filter by project</span
        ><select v-model="selectedProject">
          <option value="All">All projects</option>
          <option v-for="project in projectNames" :key="project" :value="project">{{ project }}</option>
        </select></label
      ><span class="mono">{{ visibleEntries.length }} entries</span>
    </div>
    <div class="timeline">
      <section v-for="group in groupedEntries" :key="group.key" class="sprint-log-group">
        <div class="sprint-log-heading">
          <span class="eyebrow">{{ group.key === 'unassigned' ? 'Unassigned sprint' : `Sprint ${group.key}` }}</span
          ><span class="mono">{{ group.entries.length }} entr{{ group.entries.length === 1 ? 'y' : 'ies' }}</span>
        </div>
        <WorkLogAccordion v-for="entry in group.entries" :key="entry.id" :entry="entry" />
      </section>
      <p v-if="!visibleEntries.length" class="project-state">No published entries match this filter.</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { workLogEntries } from '../data/journal'
import WorkLogAccordion from '../components/WorkLogAccordion.vue'
const selectedProject = ref('All')
const projectNames = computed(() => [...new Set(workLogEntries.map((entry) => entry.project))])
const visibleEntries = computed(() =>
  [...workLogEntries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((entry) => selectedProject.value === 'All' || entry.project === selectedProject.value),
)
const groupedEntries = computed(() => {
  const groups = new Map<string, typeof workLogEntries>()
  for (const entry of visibleEntries.value) {
    const key = entry.relatedSprint || 'unassigned'
    groups.set(key, [...(groups.get(key) || []), entry])
  }
  return [...groups.entries()].map(([key, entries]) => ({ key, entries }))
})
</script>
