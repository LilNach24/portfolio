<script setup lang="ts">
import { Linkedin } from 'lucide-vue-next'
</script>

<template>
  <div class="card animate-cartaBottom">
    <figure>
      <img src="@/assets/img/profile.png" class="w-xs" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title text-3xl font-bold">Nacho de la Torre Planas</h2>
      <h3 class="text-xl font-bold">Software engineering</h3>
      <p class="text-lg italic mt-2">
       "Failure is the shadow of success"
      </p>

      <div class="card-actions pt-4">
        <a href="https://www.linkedin.com/in/nacho-de-la-torre-planas-b71145314" target="_blank">
          <Linkedin></Linkedin>
        </a>
      </div>
    </div>
  </div>
</template>
