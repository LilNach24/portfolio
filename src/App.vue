<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <img alt="Logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />
    <nav class="nav">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/about">Sobre mí</RouterLink>
      <RouterLink to="/projects">Proyectos</RouterLink>
      <RouterLink to="/contact">Contacto</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.nav a {
  margin-left: 1rem;
}
</style>
