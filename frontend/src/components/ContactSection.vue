<template>
  <footer id="contact" data-section class="contact-section">
    <div class="section-head"><span class="section-label">06 / Contact</span><span>Have a project, question or good idea?</span></div>
    <h2>Let’s make<br /><em>it real.</em></h2>
    <div class="contact-links">
      <a v-for="(link, index) in links" :key="link.label" :href="link.href" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noreferrer' : undefined"><span>0{{ index + 1 }}</span><strong>{{ link.label }}</strong><span>↗</span></a>
    </div>
    <div class="contact-footer"><a class="wordmark" href="#top" aria-label="Duuk van den Bosch, home">DVDB <span aria-hidden="true"></span></a><span>Designed for clarity / Built with intent</span><a href="#top">Back to top ↑</a></div>
  </footer>
</template>
<script setup lang="ts">
import { siteConfig } from '../config/site'
const links = [
  { label: 'GitHub', href: siteConfig.githubUrl, external: true },
  { label: 'GitLab', href: siteConfig.gitlabUrl, external: true },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, external: true },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
]
</script>
