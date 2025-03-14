<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<template>
  <div class="w-full h-full">
    <TheNavbar />
    <RouterView />
  </div>
</template>
