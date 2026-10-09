<template>
  <div class="shell content-page">
    <div class="page-heading">
      <p class="eyebrow">About / 02</p>
      <h1 class="display">Curious by<br /><em>default.</em></h1>
    </div>
    <div class="about-layout">
      <div class="about-lead">
        <p>
          I’m a Software Engineering student at the Amsterdam University of Applied Sciences (HvA), interested in the
          craft and thinking that goes into dependable software.
        </p>
      </div>
      <div class="about-copy">
        <p>
          My interests sit close to the backend: APIs, databases, and the shape of maintainable systems. I enjoy working
          across the stack when it helps turn an idea into something useful and clear.
        </p>
        <p>
          I’m expanding my skills through challenging software projects and hands-on work with Java, Spring Boot, PHP,
          C#, JavaScript, TypeScript, Vue.js, SQL, and REST APIs.
        </p>
        <RouterLink to="/contact" class="text-link">Let’s connect ↗</RouterLink>
      </div>
    </div>
    <section class="skills-section section-rule">
      <p class="eyebrow">Tools & technologies</p>
      <div class="skill-list">
        <span v-for="skill in skills" :key="skill">{{ skill }}</span>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { skills } from '../data/portfolio'
</script>
