<template>
  <div class="shell content-page contact-page">
    <div class="page-heading contact-heading">
      <p class="eyebrow">Contact / 04</p>
      <h1 class="display">Have a<br /><em>good idea?</em></h1>
      <p class="heading-note">
        I'm always open to a thoughtful conversation about software, collaboration, or the next interesting problem.
      </p>
    </div>
    <div class="contact-layout">
      <div class="contact-copy">
        <p>The best way to find my work is through the code itself. Pick the channel that works for you.</p>
        <a class="email-card" href="mailto:duukvandenbosch@gmail.com"
          ><span class="mono">DIRECT EMAIL</span><strong>duukvandenbosch@gmail.com</strong
          ><span class="email-arrow">↗</span></a
        >
      </div>
      <div>
        <p class="eyebrow contact-label">Find me online</p>
        <SocialLinks />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SocialLinks from '../components/SocialLinks.vue'
</script>
