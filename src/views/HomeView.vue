<script setup lang="ts">
import ThePersonalCard from '@/components/ThePersonalCard.vue'
import TheStudies from '@/components/TheFormation.vue'
</script>

<template>
  <div class="flex flex-row w-full h-full custom-bg">
    <ThePersonalCard />
    <TheStudies />
  </div>
</template>

<style>
.custom-bg {
  background: linear-gradient(-45deg, #63e578, #57cfb3, #eee48a, #65e9ca);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
