<template>
  <header>
    <img src="/images/logo-green-black.png" alt="nuxt3-logo"  height="50px"/>
    <nav>
      <NuxtLink to="/">All Posts</NuxtLink>
      <button id="to-top" type="button" @click="handleToTop">To Top</button>
    </nav>
  </header>
</template>

<script setup>

const handleToTop = () => {
  console.log('herere')
  window.scrollTo({ top: 0,behavior: "smooth"})
}

</script>

<style lang="scss" scoped>
header {
  z-index: 2;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 80px;
  background-color: white;
  border-bottom: 2px solid lightcoral;
  nav {
    display: flex;
    column-gap: 20px;
    a {
      font-size: 2em;
    }
    #to-top{
      border: 4px solid lightcoral;
      background-color: transparent;
      width: 200px;
      border-radius: 12px;
      &:hover {
        background-color: lightcoral;
      }
      transition: 0.3s ease;
    }
  }
}
</style>