<template>
  <div class="project-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a v-if="link" :href="link" target="_blank" rel="noopener">Ver proyecto</a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  link?: string
}

defineProps<Props>()
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}
.project-card h3 {
  margin: 0 0 0.5rem 0;
}
.project-card a {
  color: #42b983;
}
</style>
