<script setup lang="ts">
const email = 'tucorreo@ejemplo.com'
</script>

<template>
  <div class="max-w-xl text-center space-y-6">
    <h2 class="text-2xl font-bold uppercase text-white">Contacto</h2>
    <p class="text-white/80">
      Si estás interesado en trabajar conmigo o simplemente quieres saludar, escríbeme:
    </p>
    <a
      :href="`mailto:${email}`"
      class="btn btn-outline btn-primary"
    >
      {{ email }}
    </a>
  </div>
</template>
