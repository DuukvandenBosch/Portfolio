<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="shell header-inner">
        <RouterLink class="wordmark" to="/" aria-label="Duuk van den Bosch home"
          ><span class="wordmark-mark">D<span>vd</span>B</span
          ><span class="wordmark-name">Duuk van den Bosch</span></RouterLink
        >
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="site-navigation"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">Toggle navigation</span>{{ menuOpen ? 'Close' : 'Menu' }}
        </button>
        <nav id="site-navigation" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="menuOpen = false">{{
            item.label
          }}</RouterLink>
        </nav>
      </div>
    </header>
    <main><RouterView /></main>
    <section class="footer-cta shell" aria-labelledby="footer-cta-title">
      <div>
        <p class="eyebrow">Open channel / 05</p>
        <h2 id="footer-cta-title">Let's make something<br /><em>useful.</em></h2>
      </div>
      <div class="footer-cta-side">
        <p>For collaborations, questions, or a good software problem.</p>
        <RouterLink class="button accent" to="/contact">Start a conversation <span>↗</span></RouterLink>
      </div>
    </section>
    <footer class="site-footer">
      <div class="shell footer-inner">
        <p>© {{ new Date().getFullYear() }} Duuk van den Bosch</p>
        <p class="footer-note">Software engineering · Amsterdam</p>
        <div class="footer-links">
          <RouterLink to="/contact">Get in touch</RouterLink><SocialLinks variant="compact" />
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SocialLinks from './components/SocialLinks.vue'
const menuOpen = ref(false)
const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]
</script>
