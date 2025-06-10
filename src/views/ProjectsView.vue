<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'

interface Project {
  title: string
  description: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'Proyecto Uno',
    description: 'Descripción breve del proyecto.',
    link: '#',
  },
  {
    title: 'Proyecto Dos',
    description: 'Descripción breve del segundo proyecto.',
    link: '#',
  },
]
</script>

<template>
  <div class="projects">
    <h1>Proyectos</h1>
    <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
  </div>
</template>

<style scoped>
.projects {
  padding: 1rem;
}
</style>
