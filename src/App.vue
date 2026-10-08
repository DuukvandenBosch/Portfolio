<template>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">Hello, I'm</p>
      <h1>Your Name</h1>
      <p class="subtitle">Frontend Developer • UI Designer • Problem Solver</p>
      <div class="actions">
        <a href="#projects" class="button primary">View Projects</a>
        <a href="#contact" class="button secondary">Contact Me</a>
      </div>
    </section>

    <section id="about" class="card">
      <h2>About Me</h2>
      <p>
        I build clean, modern digital experiences with a focus on performance,
        accessibility, and user-centered design.
      </p>
    </section>

    <section id="projects" class="card">
      <h2>Featured Projects</h2>
      <div class="project-grid">
        <article class="project-item">
          <h3>Project One</h3>
          <p>Designed and developed a responsive product landing page.</p>
        </article>
        <article class="project-item">
          <h3>Project Two</h3>
          <p>Built a dashboard experience for tracking business metrics.</p>
        </article>
        <article class="project-item">
          <h3>Project Three</h3>
          <p>Created an e-commerce storefront optimized for conversion.</p>
        </article>
      </div>
    </section>

    <section id="contact" class="card">
      <h2>Contact</h2>
      <p>Email: hello@example.com</p>
      <p>LinkedIn: linkedin.com/in/yourname</p>
      <p>GitHub: github.com/yourname</p>
    </section>
  </main>
</template>

<script setup lang="ts">
// Portfolio content can be edited here.
</script>
