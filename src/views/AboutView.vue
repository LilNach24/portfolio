<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import TheFormation from '@/components/TheFormation.vue';
</script>
<template>
   <div
    class="bg-gradient-to-r from-[#291ca0] via-[#c4712d] to-[#a325d4] bg-[length:400%_400%] animate-gradient min-h-screen w-full"
  >
    <TheNavbar />
    <div class="flex flex-col w-full h-full custom-bg gap-4 p-3">
      <div class="w-full sm:p-10">
        <TheFormation />
      </div>
    </div>
  </div>
</template>
