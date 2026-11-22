<template>
  <header class="site-header">
    <div class="site-header__inner">
      <a class="wordmark" href="#top" aria-label="Duuk van den Bosch, home">DVDB <span aria-hidden="true"></span></a>
      <p class="availability"><span aria-hidden="true"></span>Software engineer</p>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="site-navigation" @click="menuOpen = !menuOpen">
        <span class="sr-only">Toggle navigation</span>{{ menuOpen ? 'Close' : 'Menu' }}
      </button>
      <nav id="site-navigation" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" :class="{ 'is-active': activeSection === item.id }" @click="navigate(item.id)">{{ item.label }}</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const menuOpen = ref(false)
const activeSection = ref('top')
const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Journal', id: 'journal' },
  { label: 'Contact', id: 'contact' },
]
function navigate(id: string): void {
  activeSection.value = id
  menuOpen.value = false
}

let observer: InstanceType<typeof globalThis.IntersectionObserver> | undefined
onMounted(() => {
  if (globalThis.location.hash) activeSection.value = globalThis.location.hash.slice(1)
  observer = new globalThis.IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target instanceof globalThis.HTMLElement) activeSection.value = visible.target.id
    },
    { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] },
  )
  globalThis.document.querySelectorAll('[data-section]').forEach((section) => observer?.observe(section))
})
onBeforeUnmount(() => observer?.disconnect())
</script>
