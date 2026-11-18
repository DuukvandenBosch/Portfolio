<template>
  <div class="portfolio-page">
    <section id="top" data-section class="hero-section">
      <div class="hero-section__meta"><span>Portfolio / 2025</span><span>NL — 51.44°N</span></div>
      <h1>Duuk van den<br /><em>Bosch</em></h1>
      <div class="hero-section__statement"><span>[ 01 ]</span><p>Building considered software and digital experiences through logic, craft and curiosity.</p></div>
      <span class="hero-section__signal">011 / BUILD / ITERATE</span>
      <div class="hero-section__role">Software<br /><span>Engineer</span></div>
      <a class="hero-section__scroll" href="#work">Scroll to explore <span>↓</span></a>
      <div class="hero-geometry" aria-hidden="true"><span class="hero-geometry__circle"></span><span class="hero-geometry__square"></span><span class="hero-geometry__square hero-geometry__square--inner"></span><span class="hero-geometry__dot"></span></div>
    </section>
    <PortfolioWorkSection />
    <ProfileSection />
    <SkillsSection />
    <JournalSection />
    <ContactSection />
  </div>
</template>
<script setup lang="ts">
import ContactSection from '../components/ContactSection.vue'
import JournalSection from '../components/JournalSection.vue'
import PortfolioWorkSection from '../components/PortfolioWorkSection.vue'
import ProfileSection from '../components/ProfileSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
</script>
