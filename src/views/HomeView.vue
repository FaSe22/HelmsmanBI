<script setup lang="ts">
import TheHome from '../components/TheHome.vue'
</script>

<template>
  <main>
    <TheHome />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
