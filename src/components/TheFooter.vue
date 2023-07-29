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
          <img
            src="@/assets/logo.png"
            alt="logo bespace"
            class="w-24 grayscale hover:grayscale-0"
          />

          <p class="px-4 py-4 text-gray-500 text-xl lg:text-base">
            &copy; Quonte by young-it <br />
            Powered by
            <a href="https://yalnguembu.netlify.app/">Yal NGUEMBU</a>
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
                item: 'block py-3 rounded px-2 text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300',
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
                item: 'block py-3 rounded px-2 text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300',
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
            <MenuItem
              v-for="(item, index) in footerItems[2]"
              :key="index"
              :path="item.path"
              :icon="item.icon"
              :theme="{
                icon: 'w-5 h-5 dark:fill-gray-100',
                item: 'block rounded p-2 px-3 mr-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700',
              }"
            />
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

defineProps({
  isUserSign: {
    type: Boolean,
    default: false,
  },
});
</script>
