<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const educationTimeline = computed(() => [
  { period: '2024-2025', label: t('education.items.2024-2025') },
  { period: '2022-2024', label: t('education.items.2022-2024') },
  { period: '2020-2022', label: t('education.items.2020-2022') },
])

const experienceTimeline = computed(() => [
  { period: '2024-now', label: t('experience.items.2024-present') },
  { period: '2023-2024', label: t('experience.items.2023-2024') },
])
</script>

<template>
  <div class="animate-cartaBottom p-3 lg:p-0 flex flex-col 2xl:flex-row items-center md:gap-12 xl:gap-20 ">
    <!-- EXPERIENCE -->
    <div class="flex flex-col items-center mb-16 font-mono">
      <h3 class="text-3xl font-bold mb-8 text-white uppercase pb-4 lg:pb-10">
        {{ t('experience.title') }}
      </h3>
      <ul class="timeline timeline-vertical">
        <li v-for="(item, i) in experienceTimeline" :key="item.period" class="timeline-item mb-6">
          <template v-if="i !== 0">
            <hr />
          </template>

          <div
            :class="[
              i % 2 === 0 ? 'timeline-start' : 'timeline-end',
              'timeline-box',
              'shadow',
              'bg-neutral',
              'text-neutral-content',
              'uppercase',
              'max-w-md',
              'w-full',
              'mx-auto',
              'p-4',
              'text-left',
            ]"
          >
            <div class="text-xs text-primary font-semibold mb-1">{{ item.period }}</div>
            <div class="max-w-80">{{ item.label }}</div>
          </div>

          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 text-primary"
            >
              <path
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              />
            </svg>
          </div>

          <template v-if="i !== experienceTimeline.length - 1">
            <hr />
          </template>
        </li>
      </ul>
    </div>

    <!-- EDUCATION -->
    <div class="flex flex-col items-center font-mono">
      <h3 class="text-3xl font-bold text-white uppercase pt-8 pb-4 font-mono">
        {{ t('education.title') }}
      </h3>
      <ul class="timeline timeline-vertical">
        <li v-for="(item, i) in educationTimeline" :key="item.period" class="timeline-item mb-6">
          <template v-if="i !== 0">
            <hr />
          </template>

          <div
            :class="[
              i % 2 === 0 ? 'timeline-start' : 'timeline-end',
              'timeline-box',
              'shadow',
              'bg-neutral',
              'text-neutral-content',
              'uppercase',
              'max-w-md',
              'w-full',
              'mx-auto',
              'p-4',
              'text-left',
            ]"
          >
            <div class="text-xs text-secondary font-semibold mb-1">{{ item.period }}</div>
            <div>{{ item.label }}</div>
          </div>

          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 text-secondary"
            >
              <path
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              />
            </svg>
          </div>

          <template v-if="i !== educationTimeline.length - 1">
            <hr />
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
