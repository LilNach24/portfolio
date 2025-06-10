<script setup lang="ts">
import ThePersonalCard from '@/components/ThePersonalCard.vue'
import TheFormation from '@/components/TheFormation.vue'
</script>

<template>
  <div class="flex flex-row w-full h-full custom-bg !space-x-4 p-3">
    <div class="w-1/2">
      <ThePersonalCard />
    </div>
    <div class="w-1/2">
      <TheFormation />
    </div>
  </div>

</template>

<style scoped>
.home {
  padding: 1rem;
}
</style>
