<template>
  <div v-if="article" class="shell article-page content-page">
    <RouterLink to="/journal" class="back-link">← Sprint journal</RouterLink>
    <header class="article-header">
      <p class="eyebrow">
        Sprint {{ String(article.number).padStart(2, '0') }} <span v-if="article.placeholder">/ Sample content</span>
      </p>
      <h1 class="display">{{ article.title }}</h1>
      <p class="article-summary">{{ article.summary }}</p>
      <p class="mono">{{ article.startDate }} — {{ article.endDate }}</p>
    </header>
    <div class="article-layout">
      <aside class="article-toc">
        <p class="eyebrow">On this page</p>
        <a href="#goal">Goal</a><a href="#planning">Planning</a><a href="#work">Work</a
        ><a href="#challenges">Challenges</a><a href="#lessons">Lessons</a><a href="#work-log">Work log</a
        ><a href="#related">Related work</a>
      </aside>
      <article class="article-content">
        <section id="goal">
          <h2>Sprint goal</h2>
          <p>{{ article.goal }}</p>
        </section>
        <section id="planning">
          <h2>Design & planning</h2>
          <p>{{ article.designProcess || 'No planning notes have been published for this sprint yet.' }}</p>
          <JournalImages :images="article.images" />
        </section>
        <section id="work">
          <h2>Planned & completed</h2>
          <h3>Planned work</h3>
          <ul>
            <li v-for="item in article.plannedWork" :key="item">{{ item }}</li>
          </ul>
          <h3>Completed work</h3>
          <ul>
            <li v-for="item in article.completedWork" :key="item">{{ item }}</li>
          </ul>
          <h3>Postponed or incomplete</h3>
          <ul>
            <li v-for="item in article.postponedWork" :key="item">{{ item }}</li>
          </ul>
          <h3>Implementation details</h3>
          <p>
            {{ article.implementationDetails || 'No implementation notes have been published for this sprint yet.' }}
          </p>
        </section>
        <section id="challenges">
          <h2>Challenges & decisions</h2>
          <h3>Technical challenges and solutions</h3>
          <ul>
            <li v-for="item in article.challenges" :key="item">{{ item }}</li>
          </ul>
          <h3>Important decisions</h3>
          <ul>
            <li v-for="item in article.decisions" :key="item">{{ item }}</li>
          </ul>
        </section>
        <section id="lessons">
          <h2>Lessons & next steps</h2>
          <h3>Lessons learned</h3>
          <ul>
            <li v-for="item in article.lessons" :key="item">{{ item }}</li>
          </ul>
          <h3>What I would improve</h3>
          <ul>
            <li v-for="item in article.improvements" :key="item">{{ item }}</li>
          </ul>
          <h3>Goals for the next sprint</h3>
          <ul>
            <li v-for="item in article.nextGoals" :key="item">{{ item }}</li>
          </ul>
        </section>
        <section id="work-log">
          <h2>Development log</h2>
          <p v-if="relatedEntries.length === 0">No work-log entries have been linked to this sprint yet.</p>
          <WorkLogAccordion v-for="entry in relatedEntries" :key="entry.id" :entry="entry" />
        </section>
        <section id="related">
          <h2>Related work</h2>
          <p v-if="article.relatedWorkLogIds?.length">Work-log entries: {{ article.relatedWorkLogIds.join(', ') }}</p>
          <p v-if="article.relatedProjectIds?.length">Projects: {{ article.relatedProjectIds.join(', ') }}</p>
          <div class="article-links">
            <a v-for="link in article.relatedLinks" :key="link.url" :href="link.url" target="_blank" rel="noreferrer"
              >{{ link.label }} ↗</a
            >
          </div>
        </section>
        <div class="tag-list">
          <span v-for="technology in article.technologies" :key="technology">{{ technology }}</span>
        </div>
      </article>
    </div>
    <nav class="sprint-navigation" aria-label="Sprint navigation">
      <RouterLink v-if="previous" :to="`/journal/${previous.slug}`">← {{ previous.title }}</RouterLink
      ><span v-else></span><RouterLink v-if="next" :to="`/journal/${next.slug}`">{{ next.title }} →</RouterLink>
    </nav>
  </div>
  <div v-else class="shell content-page">
    <h1 class="display">Sprint not<br /><em>found.</em></h1>
    <RouterLink to="/journal" class="button accent">Back to journal ↗</RouterLink>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { sprintArticles } from '../data/journal'
import JournalImages from '../components/JournalImages.vue'
import WorkLogAccordion from '../components/WorkLogAccordion.vue'
import { workLogEntries } from '../data/journal'
const route = useRoute()
const article = computed(() => sprintArticles.find((item) => item.slug === route.params.slug))
const relatedEntries = computed(() =>
  workLogEntries
    .filter((entry) => entry.relatedSprint === article.value?.slug)
    .sort((a, b) => b.date.localeCompare(a.date)),
)
const index = computed(() => sprintArticles.findIndex((item) => item.slug === route.params.slug))
const previous = computed(() => (index.value >= 0 ? sprintArticles[index.value + 1] : undefined))
const next = computed(() => (index.value > 0 ? sprintArticles[index.value - 1] : undefined))
</script>
