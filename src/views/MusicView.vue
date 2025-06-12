<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
</script>
<template>
  <div
    class="bg-gradient-to-r from-[#291ca0] via-[#c4712d] to-[#a325d4] bg-[length:400%_400%] animate-gradient min-h-screen w-full"
  >
    <TheNavbar />
    <div class="flex items-center justify-center min-h-screen sm:p-10">
      <iframe src="https://open.spotify.com/" frameborder="0"></iframe>
    </div>
  </div>
</template>
