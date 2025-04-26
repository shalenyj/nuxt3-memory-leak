import mitt from 'mitt';
import { defineNuxtPlugin } from 'nuxt/app';

const emitter = mitt();

export default defineNuxtPlugin(() => {
  return {
    provide: {
      eventBus: emitter
    }
  };
});