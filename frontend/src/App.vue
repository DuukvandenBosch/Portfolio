<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="shell header-inner">
        <RouterLink class="wordmark" to="/" aria-label="Duuk van den Bosch home">
          <span class="wordmark-mark">D<span>vd</span>B</span>
          <span class="wordmark-name">Duuk van den Bosch</span>
        </RouterLink>
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
          <a class="nav-contact" href="https://github.com/DuukvandenBosch" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </div>
    </header>
    <main><RouterView /></main>
    <footer class="site-footer">
      <div class="shell footer-inner">
        <p>© {{ new Date().getFullYear() }} Duuk van den Bosch</p>
        <p class="footer-note">Software engineering · Amsterdam</p>
        <div class="footer-links">
          <RouterLink to="/contact">Get in touch</RouterLink>
          <a href="https://gitlab.fdmci.hva.nl/boschdp" target="_blank" rel="noreferrer">GitLab ↗</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]
</script>
