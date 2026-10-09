<template>
  <div class="shell home-page">
    <section class="home-hero">
      <div>
        <p class="eyebrow">Software engineering / 01</p>
        <h1 class="display">Building<br /><em>useful</em><br />software.</h1>
      </div>
      <div class="hero-aside">
        <p>
          Hi, I'm Duuk — a Software Engineering student interested in the systems behind useful digital
          products.
        </p>
        <div class="hero-meta">
          <span class="mono">Based in Amsterdam</span><span class="mono">Available for good problems</span>
        </div>
        <div class="actions">
          <RouterLink to="/projects" class="button accent">Explore projects <span>↗</span></RouterLink
          ><a href="https://github.com/DuukvandenBosch" target="_blank" rel="noreferrer" class="text-link">GitHub ↗</a>
        </div>
      </div>
    </section>
    <section class="home-intro section-rule">
      <p class="eyebrow">A considered approach</p>
      <p class="intro-copy">
        I like understanding how things work, then making them work better. My focus is backend development, APIs,
        databases, and maintainable software that solves a real need.
      </p>
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
<script setup lang="ts"></script>
