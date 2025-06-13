<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import ThePersonalCard from '@/components/ThePersonalCard.vue'
import TheFormation from '@/components/TheFormation.vue'
import TheNavbar from '@/components/TheNavbar.vue'

const sections = ['home', 'about', 'contact']
const currentIndex = ref(0)
let isScrolling = false

function scrollToSection(index: number) {
  const section = document.getElementById(sections[index])
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    currentIndex.value = index
  }
}

function handleScroll(event: WheelEvent) {
  if (isScrolling) return
  isScrolling = true

  const delta = event.deltaY
  if (delta > 0 && currentIndex.value < sections.length - 1) {
    currentIndex.value++
  } else if (delta < 0 && currentIndex.value > 0) {
    currentIndex.value--
  }

  scrollToSection(currentIndex.value)
  setTimeout(() => (isScrolling = false), 1000)
}

function handleKey(event: KeyboardEvent) {
  if (isScrolling) return
  if (event.key === 'ArrowDown' && currentIndex.value < sections.length - 1) {
    isScrolling = true
    currentIndex.value++
    scrollToSection(currentIndex.value)
    setTimeout(() => (isScrolling = false), 1000)
  } else if (event.key === 'ArrowUp' && currentIndex.value > 0) {
    isScrolling = true
    currentIndex.value--
    scrollToSection(currentIndex.value)
    setTimeout(() => (isScrolling = false), 1000)
  }
}

onMounted(() => {
  window.addEventListener('wheel', handleScroll, { passive: false })
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleScroll)
  window.removeEventListener('keydown', handleKey)
})
</script>

<template>
  <TheNavbar :scrollToSection="scrollToSection" />
  <main class="h-screen overflow-hidden no-scrollbar">
    <div class="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      <template v-for="(id, i) in sections" :key="id">
        <button
          :class="[
            'w-2 h-2 rounded-full transition',
            currentIndex === i ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white',
          ]"
          @click="scrollToSection(i)"
        ></button>
      </template>
    </div>
    <section
      id="home"
      class="bg-gradient-to-r from-[#291ca0] via-[#c4712d] to-[#a325d4] bg-[length:400%_400%] animate-gradient h-screen w-full"
    >
      <div class="flex items-center justify-center h-screen sm:p-10">
        <ThePersonalCard />
      </div>
    </section>

    <section id="about" class="h-screen flex items-center justify-center bg-purple-900 text-white">
      <TheFormation />
    </section>

    <section id="contact" class="h-screen flex items-center justify-center bg-blue-900 text-white">
      <h1 class="text-5xl font-bold">CONTACT</h1>
    </section>
  </main>
</template>
