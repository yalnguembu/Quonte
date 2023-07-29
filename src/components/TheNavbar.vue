<template>
  <nav
    class="w-full sticky top-0 dark:border-gray-700 flex justify-between px-4 py-1 bg-white dark:bg-gray-900 z-20"
  >
    <ul
      class="flex items-center w-full pr-8 justify-between lg:w-fit lg:pr-0"
      data-test="navbar-left-content"
    >
      <li data-test="app-logo-link">
        <RouterLink
          to="/"
          class="block text-xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500 px-4 py-4 mr-8"
        >
          <img src="@/assets/images/logo.svg" alt="" class="w-8 rotate-45" />
          uonte
        </RouterLink>
      </li>
      <MenuItem
        v-for="(navBarItem, index) in navBarItems.left"
        :key="index"
        :path="navBarItem.path"
        :label="navBarItem.label"
        :title="navBarItem.title"
      />
    </ul>
    <ul class="flex items-center" data-test="navbar-center-content">
      <div class="hidden lg:flex">
        <MenuItem
          v-for="(navBarItem, index) in navBarItems.center"
          :key="index"
          :path="navBarItem.path"
          :label="navBarItem.label"
          :title="navBarItem.title"
          :theme="navBarItem.theme"
        />
      </div>
      <div class="hidden items-center lg:flex">
        <div class="-r h-1/3 border-r-gray-200 dark:border-r-gray-700 mx-6" />
        <li>
          <ThemeButton :theme="theme" @toggle="toggleTheme" />
        </li>
        <div
          class="border-r h-1/3 border-r-gray-200 dark:border-r-gray-700 mx-6"
        />
        <div data-test="navbar-right-content" class="flex">
          <MenuItem
            class="mx-1"
            v-for="(navBarItem, index) in navBarItems.right"
            :key="index"
            :icon="navBarItem.icon as unknown as VueElement"
            :theme="{
              icon: 'w-5 h-5 dark:fill-gray-100',
              item: 'block rounded p-2 rounded-md border border-transparent hover:border-gray-300 dark:hover:border-gray-700',
            }"
            :title="navBarItem.title"
            :path="navBarItem.path"
          />
        </div>
      </div>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import ThemeButton from "./button/ThemeButton.vue";
import MenuItem from "./menu/MenuItem.vue";
import { VueElement, onMounted, ref } from "vue";
import type { MenuItem as MenuItemType } from "@/utils/type";

defineProps({
  navBarItems: {
    type: Object,
    left: {
      type: Array<MenuItemType>,
      required: true,
    },
    center: {
      type: Array<MenuItemType>,
      required: true,
    },
    right: {
      type: Array<MenuItemType>,
      required: true,
    },
    required: true,
  },
});

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const theme = ref<string>(localStorage.getItem("theme") ?? systemTheme);

const setDark = () => {
  document.body.classList.add("dark");
  theme.value = "dark";
  localStorage.setItem("theme", theme.value);
};

const setLight = () => {
  document.body.classList.remove("dark");
  theme.value = "light";
  localStorage.setItem("theme", theme.value);
};

const toggleTheme = () => {
  if (theme.value === "dark") setLight();
  else setDark();
};

onMounted(() => {
  theme.value === "dark" ? setDark() : setLight();
});
</script>
