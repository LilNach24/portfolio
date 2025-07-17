// src/types/vue-i18n.d.ts
import 'vue-i18n'

declare module 'vue-i18n' {
  interface DefineLocaleMessage {
    navbar: {
      home: string
      about: string
      experience: string
      education: string
      contact: string
    }
    personalCard: { job: string }
    about: {
      title: string
      summary: string
      languages: string
      hobbies: string
      hobbiesList: string[]
      qualities: string
      qualitiesList: string[]
    }
    experience: { title: string; items: Record<string, string> }
    education: { title: string; items: Record<string, string> }
  }
}
