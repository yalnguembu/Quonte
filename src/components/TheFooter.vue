<template>
  <footer
    class="w-full bg-gray-100 dark:bg-gray-800 grid grid-cols-4 gap-4 dark:text-gray-100 p-12"
  >
    <div class="flex flex-col justify-between p-4">
      <img src="@/assets/logo.png" alt="logo bespace" class="w-1/4" />

      <p class="px-2 py-4 text-gray-500">
        &copy; Quonte by young-it <br />
        Powered by <a href="https://yalnguembu.netlify.app/">Yal NGUEMBU</a>
      </p>
    </div>
    <div class="p-4">
      <h5 class="dark:text-gray-100 font-bold text-xl px-2 mb-2">Products</h5>
      <ul>
        <MenuItem
          v-for="(item, index) in footerItems[0]"
          :key="index"
          :path="item.path"
          :label="item.label"
          :theme="{
            item: 'block py-3 text-md rounded px-2 text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300',
          }"
        />
      </ul>
    </div>
    <div class="p-4">
      <h5 class="dark:text-gray-100 font-bold text-xl px-2 mb-2">About us</h5>
      <ul>
        <MenuItem
          v-for="(item, index) in footerItems[1]"
          :key="index"
          :path="item.path"
          :label="item.label"
          :theme="{
            item: 'block py-3 text-md rounded px-2 text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300',
          }"
        />
      </ul>
    </div>
    <div class="p-4 flex flex-col justify-between">
      <h5 class="dark:text-gray-100 font-bold text-xl px-2 mb-2">
        Get in touch
      </h5>
      <p class="px-2 py-4 text-gray-500">
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
  </footer>
</template>

<script lang="ts" setup>
import MenuItem from "./menu/MenuItem.vue";
import { footerItems } from "@/utils/data";
</script>
