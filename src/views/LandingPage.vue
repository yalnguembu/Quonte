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
<script lang="ts" setup>
import HeaderSection from "@/components/landing/HeaderSection.vue";
import HeroSection from "@/components/landing/HeroSection.vue";
import AppPresentation from "@/components/landing/AppPresentation.vue";
import ContributorsSection from "@/components/landing/ContributorsSection.vue";
import ContactSection from "@/components/landing/ContactSection.vue";
</script>
