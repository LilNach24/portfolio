<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { User, Globe, List, Award } from 'lucide-vue-next'

const { t, getLocaleMessage, locale } = useI18n()

const hobbiesList = computed(() =>
  getLocaleMessage(locale.value).about.hobbiesList
)
const qualitiesList = computed(() =>
  getLocaleMessage(locale.value).about.qualitiesList
)
</script>

<template>
  <div
    class="w-full max-w-5xl px-6 sm:px-10 md:px-16 pt-20 sm:pt-24 xl:pt-14 2xl:pt-0 text-white font-mono space-y-12"
  >
    <!-- 🌟 Resumen personal -->
    <section>
      <h3 class="text-2xl sm:text-3xl font-bold mb-4 uppercase pb-3 flex items-center justify-center md:justify-start">
        {{ t('about.title') }}
        <User class="w-6 h-6 !ml-2" />
      </h3>
      <p class="text-base sm:text-lg leading-relaxed whitespace-pre-line pb-6">
        {{ t('about.summary') }}
      </p>
    </section>

    <!-- 🔲 Sub-secciones -->
    <section>
      <div class="flex flex-col md:flex-row gap-8 pb-6">
        <!-- 🏳️ Idiomas -->
        <div class="flex-1 bg-white/10 p-6 rounded-lg">
          <h4 class="text-xl font-semibold mb-4 uppercase text-center md:text-left flex items-center justify-center md:justify-start">
            {{ t('about.languages') }}
            <Globe class="w-5 h-5 !ml-2" />
          </h4>
          <div class="flex justify-center items-center gap-6 flex-wrap pt-5">
            <img
              src="@/assets/svg/flags/catalan.svg"
              alt="Català"
              class="h-6 w-10 sm:h-8 sm:w-12 rounded-sm"
            />
            <img
              src="@/assets/svg/flags/spanish.svg"
              alt="Español"
              class="h-10 w-10 sm:h-12 sm:w-12"
            />
            <img
              src="@/assets/svg/flags/english.svg"
              alt="English"
              class="h-10 w-10 sm:h-12 sm:w-12"
            />
          </div>
        </div>

        <!-- 🎯 Hobbies -->
        <div class="flex-1 bg-white/10 p-6 rounded-lg">
          <h4 class="text-xl font-semibold mb-4 pb-3 uppercase flex items-center">
            {{ t('about.hobbies') }}
            <List class="w-5 h-5 !ml-2" />
          </h4>
          <ul class="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li v-for="h in hobbiesList" :key="h">{{ h }}</li>
          </ul>
        </div>

        <!-- ⚡ Cualidades -->
        <div class="flex-1 bg-white/10 p-6 rounded-lg">
          <h4 class="text-xl font-semibold mb-4 pb-3 uppercase flex items-center">
            {{ t('about.qualities') }}
            <Award class="w-5 h-5 !ml-2" />
          </h4>
          <ul class="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li v-for="q in qualitiesList" :key="q">{{ q }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
