<script setup lang="ts">
import { Linkedin } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="card animate-cartaBottom">
    <figure>
      <img src="@/assets/img/profile.png" class="w-xs" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title text-4xl font-bold font-pacifico text-white">Nacho de la Torre Planas</h2>
      <h3 class="text-xl font-semibold  text-whiten font-mono text-white">{{ t('personalCard.job') }}</h3>
      <p class="text-lg italic mt-2 text-white">
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
