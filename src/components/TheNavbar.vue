<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import Logo from '@/assets/img/logoNM.png'
import EnglishFlag from '@/assets/svg/flags/english.svg'
import SpanishFlag from '@/assets/svg/flags/spanish.svg'

const { locale } = useI18n()
const { t } = useI18n()

function toggleLang() {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}

const currentFlag = computed(() => {
  return locale.value === 'es' ? SpanishFlag : EnglishFlag
})

const props = defineProps<{ scrollToSection: (index: number) => void }>()

</script>

<template>
  <div class="navbar bg-black/10 text-white shadow-md backdrop-blur-md fixed top-0 left-0 w-full z-50 font-mono">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a class="px-4"><img :src="Logo" alt="logo" class="w-16 h-16" /></a>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 uppercase text-lg">
        <li>
          <a @click="props.scrollToSection(0)">{{t('navbar.home')}}</a>
        </li>
        <li>
          <a @click="props.scrollToSection(1)">{{t('navbar.about')}}</a>
        </li>
        <li>
          <a @click="props.scrollToSection(2)">{{t('navbar.contact')}}</a>
        </li>
      </ul>
    </div>

    <div class="navbar-end px-5">
      <div class="flex flex-row items-center gap-4">
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
