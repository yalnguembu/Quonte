<template>
  <footer
    class="min-h-4 w-full bg-gray-100 dark:bg-gray-800 dark:text-gray-100"
  >
    <div
      data-test="not-signed-user-menu"
      v-if="!isUserSign"
      class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:p-12"
    >
      <AnimeOnScroll>
        <div
          class="max-w-screen-xl items-center flex flex-col justify-between p-4 lg:items-start"
        >
          <RouterLink
            to="/"
            class="text-xl font-bold text-transparent flex flex-col items-center px-4"
          >
            <img src="@/assets/images/logo.svg" alt="" class="w-16 rotate-45" />
            <span
              class="bg-clip-text text-4xl bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500"
              >Quonte</span
            >
          </RouterLink>
          <p class="px-4 py-4 text-gray-500 text-xl lg:text-base">
            &copy; {{ thisYear }} Quonte inc<br />
            By
            <LinkWrapper
              path="https://yalnguembu.netlify.app/"
              title="visit Young-Tech website"
              is-external
              class="hover:text-blue-400 hover:underline italic font-sans font-bold"
            >
              Young-Tech
            </LinkWrapper>
          </p>
        </div>
      </AnimeOnScroll>
      <AnimeOnScroll>
        <div class="p-4 text-center lg:text-left">
          <h5 class="dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2">
            Products
          </h5>
          <ul>
            <MenuItem
              v-for="(item, index) in footerItems[0]"
              :key="index"
              :path="item.path"
              :label="item.label"
              :theme="{
                label: 'text-xl lg:text-base',
                item: 'block py-3 rounded px-2 text-gray-500 hover:text-green-800 hover:font-bold dark:hover:text-gray-100',
              }"
            />
          </ul>
        </div>
      </AnimeOnScroll>
      <AnimeOnScroll>
        <div class="p-4 text-center lg:text-left">
          <h5 class="dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2">
            About us
          </h5>
          <ul>
            <MenuItem
              v-for="(item, index) in footerItems[1]"
              :key="index"
              :path="item.path"
              :label="item.label"
              :theme="{
                label: 'text-xl lg:text-base',
                item: 'block py-3 rounded px-2 text-gray-500 hover:text-green-800 hover:font-bold  dark:hover:text-gray-100',
              }"
            />
          </ul>
        </div>
      </AnimeOnScroll>
      <AnimeOnScroll>
        <div
          class="p-4 flex flex-col items-center justify-between lg:items-start"
        >
          <h5 class="dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2">
            Get in touch
          </h5>
          <p class="px-2 py-4 text-gray-500 text-xl lg:text-base">
            Question or feedback? <br />
            We'd love to hear from you
          </p>
          <ul class="flex">
            <LinkWrapper
              v-for="(item, index) in footerItems[2]"
              :key="index"
              :path="item.path"
              isExternal
              class="block p-2 px-3 mr-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <component :is="item.icon" class="w-5 h-5 dark:fill-gray-100" />
            </LinkWrapper>
          </ul>
        </div>
      </AnimeOnScroll>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import MenuItem from "./menu/MenuItem.vue";
import { footerItems } from "@/utils/data";
import AnimeOnScroll from "@/components/AnimeOnScroll.vue";
import LinkWrapper from "./LinkWrapper.vue";

defineProps({
  isUserSign: {
    type: Boolean,
    default: false,
  },
});

const thisYear = new Date().getFullYear();
</script>
