<template>
  <Posts :posts="posts" />
</template>

<script setup>
import Posts from '@/components/Posts.vue'

const { data: posts } = await useAsyncData('post', () => $fetch('https://jsonplaceholder.typicode.com/posts'))
</script>
