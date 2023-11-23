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
      <AppPresentation class="max-w-screen-lg mx-auto" />
      <ContributorsSection class="max-w-screen-lg mx-auto" />
      <ContactSection class="max-w-screen-lg mx-auto" />
    </main>
  </div>
</template>
<script lang="ts" setup>
import {defineAsyncComponent} from "vue";
import HeaderSection from "@/components/landing/HeaderSection.vue"

const HeroSection = defineAsyncComponent(() => import( "@/components/landing/HeroSection.vue"));
const AppPresentation = defineAsyncComponent(() => import( "@/components/landing/AppPresentation.vue"));
const ContributorsSection = defineAsyncComponent(() => import( "@/components/landing/ContributorsSection.vue"));
const ContactSection = defineAsyncComponent(() => import( "@/components/landing/ContactSection.vue"));

document.title = "Quonte | The note app whose change the game"
</script>
