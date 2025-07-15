<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const educationTimeline = computed(() => [
  { period: '2024-2025', label: t('education.items.2024-2025') },
  { period: '2022-2024', label: t('education.items.2022-2024') },
  { period: '2020-2022', label: t('education.items.2020-2022') },
])
</script>

<template>
  <div class="relative flex flex-col items-center font-mono w-full max-w-3xl">
    <h3
      class="absolute -top-10 lg:-top-12 xl:-top-14 left-1/2 -translate-x-1/2 text-lg md:text-xl lg:text-3xl font-bold text-white uppercase"
    >
      {{ t('education.title') }}
    </h3>

    <div class="h-12 md:h-16 lg:h-20" />

    <ul class="timeline timeline-vertical">
      <li
        v-for="(item, i) in educationTimeline"
        :key="item.period"
        class="timeline-item mb-4 sm:mb-6"
      >
        <template v-if="i !== 0"><hr /></template>
        <div
          :class="[
            i % 2 === 0 ? 'timeline-start' : 'timeline-end',
            'timeline-box shadow bg-neutral text-neutral-content uppercase',
            'w-full sm:max-w-md mx-auto p-3 sm:p-4 text-left',
          ]"
        >
          <div class="text-xs sm:text-sm text-secondary font-semibold mb-1">
            {{ item.period }}
          </div>
          <div class="text-sm sm:text-base">{{ item.label }}</div>
        </div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4 sm:h-5 sm:w-5 text-secondary"
          >
            <path
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            />
          </svg>
        </div>
        <template v-if="i !== educationTimeline.length - 1"><hr /></template>
      </li>
    </ul>
  </div>
</template>
