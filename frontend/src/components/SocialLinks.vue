<template>
  <div class="social-links" :class="`social-links--${variant}`" aria-label="Social links">
    <a
      v-for="link in socialLinks"
      :key="link.label"
      class="social-link"
      :href="link.href"
      :target="link.external ? '_blank' : undefined"
      :rel="link.external ? 'noreferrer' : undefined"
      :aria-label="link.label"
    >
      <svg v-if="link.icon === 'mail'" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 6 9 7 9-7M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      </svg>
      <svg v-else-if="link.icon === 'linkedin'" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 9v9M6 6v.01M10 18v-5a4 4 0 0 1 8 0v5M10 9v9" />
      </svg>
      <svg v-else-if="link.icon === 'github'" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M15 22v-3.5c.04-1.1-.4-2.1-1.2-2.8 3.9-.4 8-1.9 8-8.5a6.6 6.6 0 0 0-1.8-4.6A6.1 6.1 0 0 0 19.9.5S18.5.1 15 2.5a13.4 13.4 0 0 0-6 0C5.5.1 4.1.5 4.1.5a6.1 6.1 0 0 0-.1 4.6 6.6 6.6 0 0 0-1.8 4.6c0 6.6 4.1 8.1 8 8.5-.8.7-1.2 1.7-1.2 2.8V22"
        />
      </svg>
      <svg v-else viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM8 9l4 3 4-3M8 16h8" /></svg>
      <span>{{ link.label }}</span
      ><span v-if="variant === 'full'" class="social-arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</template>
<script setup lang="ts">
import { socialLinks } from '../config/site'
withDefaults(defineProps<{ variant?: 'full' | 'compact' }>(), { variant: 'full' })
</script>
