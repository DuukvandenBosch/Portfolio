<template>
  <div class="shell content-page about-page">
    <div class="page-heading about-hero">
      <div>
        <p class="eyebrow">About / 02</p>
        <h1 class="display">Duuk van<br /><em>den Bosch.</em></h1>
      </div>
      <div class="about-hero-note">
        <p class="mono">{{ aboutData.subtitle }}</p>
        <p>{{ aboutData.introduction }}</p>
      </div>
    </div>
    <section class="about-profile section-rule">
      <p class="eyebrow">Profile</p>
      <p>{{ aboutData.profile }}</p>
    </section>
    <section class="about-section">
      <div class="section-heading">
        <p class="eyebrow">Experience / 01</p>
        <span class="mono">Software development</span>
      </div>
      <div class="about-timeline">
        <article
          v-for="item in aboutData.experience"
          :key="`${item.organization}-${item.role}`"
          class="about-timeline-item"
          :class="{ emphasis: item.emphasis }"
        >
          <div class="mono">{{ item.period }}</div>
          <div>
            <h2>{{ item.role }}</h2>
            <h3>{{ item.organization }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </section>
    <section class="about-section">
      <div class="section-heading">
        <p class="eyebrow">Education / 02</p>
        <span class="mono">Learning continuously</span>
      </div>
      <div class="about-timeline">
        <article
          v-for="item in aboutData.education"
          :key="`${item.organization}-${item.role}`"
          class="about-timeline-item"
          :class="{ emphasis: item.emphasis }"
        >
          <div class="mono">{{ item.period }}</div>
          <div>
            <h2>{{ item.role }}</h2>
            <h3>{{ item.organization }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </section>
    <section class="about-lower">
      <div>
        <p class="eyebrow">Technical skills</p>
        <div v-for="(items, category) in aboutData.skills" :key="category" class="skill-group">
          <h2>{{ category }}</h2>
          <div class="skill-list">
            <span v-for="skill in items" :key="skill">{{ skill }}</span>
          </div>
        </div>
      </div>
      <div>
        <p class="eyebrow">Languages</p>
        <div class="language-list">
          <div v-for="language in aboutData.languages" :key="language.name">
            <strong>{{ language.name }}</strong
            ><span>{{ language.level }}</span>
          </div>
        </div>
        <p class="eyebrow interests-label">Outside the code</p>
        <div class="interest-list">
          <span v-for="interest in aboutData.interests" :key="interest">{{ interest }}</span>
        </div>
      </div>
    </section>
    <section class="about-contact section-rule">
      <div>
        <p class="eyebrow">Contact / 04</p>
        <h2>Let's talk<br /><em>software.</em></h2>
      </div>
      <div class="about-contact-links">
        <a
          v-for="link in aboutData.links"
          :key="link.label"
          :href="link.url"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noreferrer' : undefined"
          ><span>{{ link.label }}</span
          ><span>↗</span></a
        >
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { aboutData } from '../data/about'
</script>
