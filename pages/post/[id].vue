<template>
  <h2>Post {{ route.params.id }}</h2>
  <OptionsCreated />
</template>

<script setup>
import { useRoute } from 'vue-router';
import OptionsCreated from '@/components/OptionsCreated.vue';

const route = useRoute();

</script>