<template>
  <div
    class="w-full bg-white dark:bg-gray-900 text-center lg:text-left mt-12 lg:mt-0"
  >
    <header class="w-full h-fit">
      <HeaderSection />
    </header>
    <main class="min-h-screen block">
      <section class="w-full bg-gray-50 py-8 dark:bg-gray-800/50">
        <HeroSection />
      </section>
      <section class="max-w-screen-lg mx-auto">
        <AppPresentation />
      </section>
      <section class="max-w-screen-lg mx-auto">
        <ContributorsSection />
      </section>
      <section class="max-w-screen-lg mx-auto">
        <ContactSection />
      </section>
    </main>
  </div>
</template>
<i18n lang="json">
{
  "en": {
    "name": "Infinite Notes",
    "logoAlt": "Infinite notes - logo",
    "title": "Your limitless note taking solution",
    "subtitle": "Never forget a thought again. Infinite Notes is your all-in-one note-taking app, letting you capture everything from ideas to grocery lists. Take notes on the go and access them from any device."
  },
  "fr": {
    "name": "Infinite Notes",
    "logoAlt": "Logo - Infinite Notes",
    "title": "Essayons quelque chose d'extraordinaire",
    "subtitle": "Your all-in-one note-taking app, letting you capture everything from ideas to grocery lists. Take notes on the go and access them from any device."
  }
}
</i18n>
<script lang="ts" setup>
import HeaderSection from "~/components/landing/HeaderSection.vue";
import HeroSection from "~/components/landing/HeroSection.vue";
import AppPresentation from "~/components/landing/AppPresentation.vue";
import ContributorsSection from "~/components/landing/ContributorsSection.vue";
import ContactSection from "~/components/landing/ContactSection.vue";
import {defineOgImageComponent} from "#imports";

const { t } = useI18n({
  useScope: 'local'
});

useSeoMeta({
  title: t("title"),
  ogTitle: t("title"),
  description: t("subtitle"),
  ogDescription: t("subtitle"),
  ogImage: '~/public/logo.png',
  ogImageUrl: '~/public/logo.png',
  ogImageAlt: t("logoAlt"),
  robots:{
    notranslate: true,
  },
  ogType: 'website',
  twitterTitle: t("title"),
  twitterDescription: t("subtitle"),
  twitterImage: {
    alt: t("logoAlt"),
    url: '~/public/logo.svg',
  },
})

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '~/static/logo.png' },
    { rel: 'icon', type: 'image/x-icon', href: '~/static/logo.png' }
  ],
})
defineOgImageComponent("LandingPage", {
  title: t("title"),
  description: t("subtitle"),
  headline: t("name"),
  alt: t("logoAlt"),
})
</script>
