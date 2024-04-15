<template>
  <main class="min-h-screen">
    <section class="text-center text-green-800 dark:text-green-100 py-12">
      <h2 class="my-4 font-bold text-3xl mx-auto lg:w-1/2">
        Get In touch with us for more information
      </h2>
      <h6 class="text-gray-500 dark:text-white">
        If you need help or have a question, we're there for you
      </h6>
    </section>
    <section
      class="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-12 pb-12 lg:w-4/5"
    >
      <ContactItem
        v-for="(contactItem, index) in contactItems"
        :key="index"
        v-bind="contactItem"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
import ContactItem from "~/components/ContactItem.vue";
import { THEME } from "~/utils/enum";
const contactItems = [
  {
    title: "Whatsapp",
    description: "(+237) 696 851 231",
    link: "https://wa.me/237696851231",
    theme: THEME.GREEN,
  },
  {
    title: "Telegram",
    description: "@yalnguembu",
    link: "https://t.me/yalnguembu",
    theme: THEME.BLUE,
  },
  {
    title: "Mail adress",
    description: "yalnguembu@gmail.com",
    link: "mailto:yalnguembu@gmail.com",
    theme: THEME.YELLOW,
  },
];
</script>
