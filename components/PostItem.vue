<template>
   <section class="posts-item">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <NuxtLink :to="{ name: 'post-id', params: { id: post.id } }">Details</NuxtLink>
    </section>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss">
.posts-item{
  border: 2px solid lightcoral;
  flex-basis: 20%;
  padding: 16px;
  border-radius: 8px;
  p {
    margin: 16px 0;
  }
}
</style>