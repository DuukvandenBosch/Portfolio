<template>
  <div v-if="images?.length" class="journal-images">
    <figure v-for="image in images" :key="image.src" class="journal-image">
      <button type="button" class="journal-image-button" :aria-label="`Open image: ${image.alt}`" @click="open(image)">
        <img :src="image.src" :alt="image.alt" loading="lazy" />
      </button>
      <figcaption v-if="image.caption || image.description">
        <strong v-if="image.caption">{{ image.caption }}</strong
        ><span v-if="image.description">{{ image.description }}</span>
      </figcaption>
    </figure>
    <div
      v-if="selected"
      class="image-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="selected.alt"
      @click.self="close"
    >
      <button class="lightbox-close" type="button" aria-label="Close image" @click="close">Close <span>×</span></button>
      <img :src="selected.src" :alt="selected.alt" />
      <p v-if="selected.caption">{{ selected.caption }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import type { JournalImage } from '../types/journal'

defineProps<{ images?: JournalImage[] }>()
const selected = ref<JournalImage | null>(null)
function open(image: JournalImage): void {
  selected.value = image
  globalThis.document.body.style.overflow = 'hidden'
  globalThis.addEventListener('keydown', onKeydown)
}
function close(): void {
  selected.value = null
  globalThis.document.body.style.overflow = ''
  globalThis.removeEventListener('keydown', onKeydown)
}
function onKeydown(event: { key: string }): void {
  if (event.key === 'Escape') close()
}
onBeforeUnmount(close)
</script>
