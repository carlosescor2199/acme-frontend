<script>
import NavBar from '@components/NavBar.vue'

export default {
  components: {
    NavBar
  }

}
</script>

<template>
  <div id="app">
    <NavBar />
    <RouterView :key="$route.fullpath" />
  </div>
</template>

<style lang="scss">

</style>
