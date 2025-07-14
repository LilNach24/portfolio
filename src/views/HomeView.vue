<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import TheNavbar from '@/components/TheNavbar.vue'
import ThePersonalCard from '@/components/ThePersonalCard.vue'
import TheAboutMe from '@/components/TheAboutMe.vue'
import TheExperienceTimeline from '@/components/TheExperienceTimeline.vue'
import TheEducationTimeline from '@/components/TheEducationTimeline.vue'
import TheContact from '@/components/TheContact.vue'

// Orden de secciones que controla el scroll y los dots laterales
const sections = ['home', 'about', 'experience', 'education', 'contact']
const currentIndex = ref(0)

function scrollToSection(id: string | number) {
  const el =
    typeof id === 'number' ? document.getElementById(sections[id]) : document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) currentIndex.value = sections.indexOf(entry.target.id)
      }
    },
    { threshold: 0.55 },
  )

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <TheNavbar :scrollToSection="scrollToSection" />

  <main class="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
    <!-- Dots laterales (solo desktop) -->
    <div class="hidden sm:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      <button
        v-for="(id, i) in sections"
        :key="id"
        class="btn btn-circle btn-xs transition-all"
        :class="currentIndex === i ? 'bg-white' : 'bg-white/40 hover:bg-white/70'"
        @click="scrollToSection(i)"
      />
    </div>

    <!-- HOME -->
    <section
      id="home"
      class="min-h-screen snap-start flex items-center justify-center bg-gradient-to-r from-[#291ca0] via-[#c4712d] to-[#a325d4] bg-[length:400%_400%] animate-gradient"
    >
      <ThePersonalCard />
    </section>

    <!-- ABOUT -->
    <section
      id="about"
      class="min-h-screen snap-start flex items-center justify-center bg-gradient-to-r from-[#4c0b81] via-[#330879] to-[#72039e] bg-[length:400%_400%] animate-gradient text-white"
    >
      <TheAboutMe />
    </section>

    <!-- EXPERIENCE -->
    <section
      id="experience"
      class="min-h-screen snap-start flex items-center justify-center bg-[#121212] text-white"
    >
      <TheExperienceTimeline />
    </section>

    <!-- EDUCATION -->
    <section
      id="education"
      class="min-h-screen snap-start flex items-center justify-center bg-[#181818] text-white"
    >
      <TheEducationTimeline />
    </section>

    <!-- CONTACT -->
    <section
      id="contact"
      class="min-h-screen snap-start flex items-center justify-center bg-blue-900 text-white"
    >
      <TheContact />
    </section>
  </main>
</template>
