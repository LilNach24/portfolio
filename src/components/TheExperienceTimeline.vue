<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const experienceTimeline = computed(() => [
  { period: '2024-now', label: t('experience.items.2024-present') },
  { period: '2023-2024', label: t('experience.items.2023-2024') },
])
</script>

<template>
  <div class="flex flex-col items-center font-mono w-full max-w-3xl">
    <h3 class="text-lg md:text-xl lg:text-3xl font-bold mb-8 text-white uppercase">
      {{ t('experience.title') }}
    </h3>

    <ul class="timeline timeline-vertical">
      <li
        v-for="(item, i) in experienceTimeline"
        :key="item.period"
        class="timeline-item mb-4 sm:mb-6"
      >
        <template v-if="i !== 0"><hr /></template>

        <div
          :class="[
            i % 2 === 0 ? 'timeline-start' : 'timeline-end',
            'timeline-box',
            'shadow',
            'bg-neutral',
            'text-neutral-content',
            'uppercase',
            'w-full',
            'sm:max-w-md',
            'mx-auto',
            'p-3 sm:p-4',
            'text-left',
          ]"
        >
          <div class="text-xs sm:text-sm text-primary font-semibold mb-1">{{ item.period }}</div>
          <div class="text-sm sm:text-base max-w-80">{{ item.label }}</div>
        </div>

        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4 sm:h-5 sm:w-5 text-primary"
          >
            <path
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            />
          </svg>
        </div>

        <template v-if="i !== experienceTimeline.length - 1"><hr /></template>
      </li>
    </ul>
  </div>
</template>
