<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const educationTimeline = [
  { period: '2024-2025', label: t('education.items.2024-2025') },
  { period: '2022-2024', label: t('education.items.2022-2024') },
  { period: '2020-2022', label: t('education.items.2020-2022') },
]

const experienceTimeline = [
  { period: '2024-present', label: t('experience.items.2024-present') },
  { period: '2023-2024', label: t('experience.items.2023-2024') },
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-12 space-y-16">
    <h2 class="text-3xl font-bold text-center text-white">{{ t('about.title') }}</h2>

    <!-- EXPERIENCE -->
    <div>
      <h3 class="text-2xl font-semibold mb-8 text-white">{{ t('experience.title') }}</h3>
      <ul class="timeline timeline-vertical">
        <li v-for="(item, i) in experienceTimeline" :key="item.period">
          <div class="timeline-start text-sm font-semibold text-gray-300">
            {{ item.period }}
          </div>

          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              />
            </svg>
          </div>

          <div class="timeline-end timeline-box bg-neutral text-neutral-content shadow">
            {{ item.label }}
          </div>
          <hr />
        </li>
      </ul>
    </div>

    <!-- EDUCATION -->
    <div>
      <h3 class="text-2xl font-semibold mb-8 text-white">{{ t('education.title') }}</h3>
      <ul class="timeline timeline-vertical">
        <li v-for="(item, i) in educationTimeline" :key="item.period">
          <div class="timeline-start text-sm font-semibold text-gray-300">
            {{ item.period }}
          </div>

          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              />
            </svg>
          </div>

          <div class="timeline-end timeline-box bg-neutral text-neutral-content shadow">
            {{ item.label }}
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>
