<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'

import Logo from '@/assets/img/logoNM.png'
import EnglishFlag from '@/assets/svg/flags/english.svg'
import SpanishFlag from '@/assets/svg/flags/spanish.svg'

const props = defineProps<{ scrollToSection: (index: number) => void }>()
const { locale, t } = useI18n()

function toggleLang() {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}

const currentFlag = computed(() => (locale.value === 'es' ? SpanishFlag : EnglishFlag))
</script>

<template>
  <div class="navbar bg-black/10 text-white shadow-md backdrop-blur-md fixed top-0 left-0 w-full h-14 z-50 font-mono">
    <div class="navbar-start">
      <!-- Mobile menu -->
      <div class="dropdown lg:hidden">
        <button tabindex="0" class="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow uppercase">
          <li><a @click="props.scrollToSection(0)">{{ t('navbar.home') }}</a></li>
          <li><a @click="props.scrollToSection(1)">{{ t('navbar.about') }}</a></li>
          <li><a @click="props.scrollToSection(2)">{{ t('navbar.experience') }}</a></li>
          <li><a @click="props.scrollToSection(3)">{{ t('navbar.education') }}</a></li>
          <li><a @click="props.scrollToSection(4)">{{ t('navbar.contact') }}</a></li>
        </ul>
      </div>
      <!-- Logo -->
      <a class="px-4">
        <img :src="Logo" alt="logo" class="w-16 h-16" />
      </a>
    </div>

    <!-- Desktop menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 uppercase text-md 2xl:text-lg">
        <li><a @click="props.scrollToSection(0)">{{ t('navbar.home') }}</a></li>
        <li><a @click="props.scrollToSection(1)">{{ t('navbar.about') }}</a></li>
        <li><a @click="props.scrollToSection(2)">{{ t('navbar.experience') }}</a></li>
        <li><a @click="props.scrollToSection(3)">{{ t('navbar.education') }}</a></li>
        <li><a @click="props.scrollToSection(4)">{{ t('navbar.contact') }}</a></li>
      </ul>
    </div>

    <div class="navbar-end px-5">
      <div class="flex items-center gap-4">
        <img
          :src="currentFlag"
          alt="Switch Language"
          class="w-6 cursor-pointer hover:scale-110 transition rounded-sm"
          @click="toggleLang"
        />
      </div>
    </div>
  </div>
</template>
