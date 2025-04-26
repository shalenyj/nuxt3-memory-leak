<template>
  <p>Hello</p>
</template>

<script>
export default {
  methods: {
    handleResize(){
      console.log('aloha')
    }
  },
  created(){
    this.$eventBus.on('resize', this.handleResize)
  },
  beforeUnmount(){

    this.$eventBus.off('resize', this.handleResize)
  }
}
</script>