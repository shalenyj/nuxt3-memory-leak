<template>
  <section class="posts">
    <h1>POSTS</h1>
    <PostItem v-for="post in visiblePosts" :key="post.id" :post="post" />
    <div ref="observerRef" class="observer-trigger" />
  </section>
 
</template>

<script setup>
import { useTemplateRef } from'vue';

import PostItem from '@/components/PostItem.vue';
import { useNuxtApp } from 'nuxt/app';

const { $eventBus } = useNuxtApp();

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});

const STEP = 20;
let page = 1;
let observer = null;

const visiblePosts = ref(props.posts.slice(0 ,page * STEP));

const observerRef = useTemplateRef('observerRef')

const loadMore = () => {
  if (page * STEP < props.posts.length) {
    page += 1
    visiblePosts.value = props.posts.slice(0, page * STEP)
  }
}

const handleSort = (field) => {
  visiblePosts.value.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return aValue - bValue;
    }

    const aStr = aValue.toLowerCase();
    const bStr = bValue.toLowerCase();

    if (aStr < bStr){
      return -1;
    }
    if (aStr > bStr){
      return 1;
    }
    return 0;
  })
  $eventBus.emit('scroll-to-top')
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    },
    { rootMargin: '100px' }
  )

  if (observerRef.value) {
    observer.observe(observerRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && observerRef.value) {
    observer.unobserve(observerRef.value)
  }
})

$eventBus.on('sort-by', handleSort);
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-around;
  h1{
    margin-top: 40px;
    flex-basis: 100%;
    text-align: center;
    font-size: 2em;
  }
}
</style>