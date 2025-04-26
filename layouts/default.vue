<template>
  <Topper />
  <main>
    <slot />
  </main>
</template>

<script setup>
import Topper from '@/components/Topper.vue'
</script>