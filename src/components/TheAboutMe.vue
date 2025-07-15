<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div
    class="w-full max-w-5xl px-6 sm:px-10 md:px-16 pt-20 sm:pt-24
           text-white font-mono space-y-12"
  >
    <!-- 🌟 Resumen personal -->
    <section>
      <h3 class="text-2xl sm:text-3xl font-bold mb-4 uppercase pb-3">
        {{ t('about.title') }}
      </h3>
      <p class="text-base sm:text-lg leading-relaxed whitespace-pre-line pb-6">
        {{ t('about.summary') }}
      </p>
    </section>

    <!-- 🔲 Sub-secciones -->
    <section>
      <div class="flex flex-col md:flex-row gap-8 pb-6 md:pb-0">

        <!-- 🏳️ Idiomas -->
        <div class="flex-1 bg-white/10 p-6 rounded-lg">
          <h4 class="text-xl font-semibold mb-4">
            {{ t('about.languages') }}
          </h4>
          <div class="flex justify-center items-center gap-6 flex-wrap pt-4">
            <!-- Sustituye por la ruta real de tus flags -->
            <img src="@/assets/svg/flags/catalan.svg"  alt="Català"  class="h-10 w-10 sm:h-12 sm:w-12" />
            <img src="@/assets/svg/flags/spanish.svg"  alt="Español" class="h-10 w-10 sm:h-12 sm:w-12" />
            <img src="@/assets/svg/flags/english.svg"  alt="English"  class="h-10 w-10 sm:h-12 sm:w-12" />
          </div>
        </div>

        <!-- 🎯 Hobbies -->
        <div class="flex-1 bg-white/10 p-6 rounded-lg">
          <h4 class="text-xl font-semibold mb-4">{{ t('about.hobbies') }}</h4>
          <ul class="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li v-for="h in t('about.hobbiesList')" :key="h">{{ h }}</li>
          </ul>
        </div>

        <!-- ⚡ Cualidades -->
         <div class="flex-1 bg-white/10 p-6 rounded-lg">
          <h4 class="text-xl font-semibold mb-4">{{ t('about.qualities') }}</h4>
          <ul class="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li v-for="q in t('about.qualitiesList')" :key="q">{{ q }}</li>
          </ul>
        </div>


      </div>
    </section>
  </div>
</template>
