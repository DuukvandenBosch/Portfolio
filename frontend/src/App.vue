<template>
  <div id="top" class="site-shell">
    <SiteHeader />
    <main><RouterView /></main>
  </div>
</template>
<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
</script>
