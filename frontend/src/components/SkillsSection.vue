<template>
  <section id="stack" data-section class="portfolio-section skills-section">
    <div class="section-head"><span class="section-label">04 / Technical field</span><h2>Tools become<br />a language.</h2><span>STACK_INDEX<br />v.01</span></div>
    <div class="skill-groups">
      <article v-for="group in groups" :key="group.number" class="skill-group"><span class="skill-group__number">{{ group.number }}</span><h2>{{ group.title }}</h2><div class="skill-group__items"><span v-for="item in group.items" :key="item">{{ item }}</span></div><span class="skill-group__plus">+</span></article>
    </div>
  </section>
</template>
<script setup lang="ts">
const groups = [
  { number: '01', title: 'Languages', items: ['Java', 'PHP', 'C#', 'JavaScript', 'TypeScript'] },
  { number: '02', title: 'Frameworks', items: ['Spring Boot', 'Vue.js'] },
  { number: '03', title: 'Systems', items: ['SQL', 'REST APIs'] },
  { number: '04', title: 'Practice', items: ['Software Engineering', 'Interface Development'] },
]
</script>
