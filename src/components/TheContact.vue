<script setup lang="ts">
import { Mail, Linkedin } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const email = 'delatorreplanas@gmail.com'
const linkedinUrl = 'https://www.linkedin.com/in/nacho-de-la-torre-planas-b71145314'
</script>

<template>
  <section class="w-full max-w-3xl mx-auto bg-white/10 p-8 rounded-2xl space-y-6">
    <h2 class="text-3xl font-bold uppercase text-white text-center font-mono pb-8">
      {{ t('contact.title') }}
    </h2>

    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a
        :href="linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 py-3 px-6 border border-white/50 rounded-lg text-white hover:bg-white/20 transition"
      >
        <Linkedin class="w-5 h-5" />
        LinkedIn
      </a>
      <a
        :href="`mailto:${email}`"
        class="flex items-center justify-center gap-2 py-3 px-6 border border-white/50 rounded-lg text-white hover:bg-white/20 transition"
      >
        <Mail class="w-5 h-5" />
        {{ email }}
      </a>
    </div>
  </section>
</template>
