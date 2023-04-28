<template>
  <nav
    class="w-full border-b dark:border-b-gray-700 flex justify-between px-4 py-1 bg-white dark:bg-gray-900"
  >
    <ul class="flex items-center">
      <li data-test="app-logo-link">
        <RouterLink
          to="/"
          class="block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500 p-4 mr-8"
        >
          Quonte
        </RouterLink>
      </li>

      <div class="hidden lg:flex" data-test="navbar-left-content">
        <template v-if="isUserConnected">
          <MenuItemVue
            v-for="(navBarItem, index) in navBarItems.private"
            :actived="true"
            :key="index"
            :path="navBarItem.path"
            :label="navBarItem.label"
            :title="navBarItem.title"
            :icon="navBarItem.icon as unknown as VueElement"
            :theme="navBarItem.theme"
          />
        </template>
        <template v-else>
          <MenuItemVue
            v-for="(navBarItem, index) in navBarItems.left"
            :key="index"
            :path="navBarItem.path"
            :label="navBarItem.label"
            :title="navBarItem.title"
          />
        </template>
      </div>
    </ul>
    <ul
      class="flex items-center hidden lg:flex"
      data-test="navbar-center-content"
    >
      <template v-if="isUserConnected">
        <button
          class="p-1 px-2 rounded border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
        >
          <UserAvatar name="user name 1" />
        </button>
      </template>
      <template v-else>
        <MenuItemVue
          v-for="(navBarItem, index) in navBarItems.center"
          :key="index"
          :path="navBarItem.path"
          :label="navBarItem.label"
          :title="navBarItem.title"
          :theme="navBarItem.theme"
        />
      </template>
      <div
        class="border-r h-1/3 border-r-gray-200 dark:border-r-gray-700 mx-6"
      />
      <li>
        <ThemeButton :theme="theme" @toggle="toggleTheme" />
      </li>

      <div
        class="border-r h-1/3 border-r-gray-200 dark:border-r-gray-700 mx-6"
      />
      <div data-test="navbar-right-content" class="flex">
        <MenuItemVue
          class="mx-1"
          v-for="(navBarItem, index) in navBarItems.right"
          :key="index"
          :icon="navBarItem.icon as unknown as VueElement"
          :theme="navBarItem.theme"
          :title="navBarItem.title"
          :path="navBarItem.path"
        />
      </div>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import ThemeButton from "./ThemeButton.vue";
import UserAvatar from "./UserAvatar.vue";
import MenuItemVue from "./MenuItem.vue";
import { VueElement, onMounted, ref } from "vue";
import type { MenuItem } from "@/utils/type";

defineProps({
  navBarItems: {
    type: Object,
    left: {
      type: Array<MenuItem>,
      required: true,
    },
    center: {
      type: Array<MenuItem>,
      required: true,
    },
    right: {
      type: Array<MenuItem>,
      required: true,
    },
    private: {
      type: Array<MenuItem>,
      required: true,
    },
    required: true,
  },
});
const isUserConnected = true;
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
