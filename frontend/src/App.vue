<template>
  <div>
    <nav class="top-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup lang="ts">
// App shell remains simple.
</script>
