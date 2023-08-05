<template>
  <nav
    class="w-full h-14 fixed bottom-0 border-r dark:border-r-gray-700 flex justify-between py-1 bg-white dark:bg-gray-900 z-20 lg:flex-row lg:w-1/5 lg:h-screen lg:flex-col lg:pb-8 lg:p-0 lg:static"
  >
    <ul
      class="flex w-full items-center w-full justify-between py-6 lg:block"
      data-test="navbar-left-content"
    >
      <li data-test="app-logo-link" class="h-28 hidden lg:block">
        <RouterLink
          to="/"
          class="block w-full px-6 text-xl font-bold text-transparent flex items-center px-4 py-4 mr-8"
        >
          <img src="@/assets/images/logo.svg" alt="" class="w-16 rotate-45" />
          <span
            class="bg-clip-text text-4xl bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500"
            >uonte</span
          >
        </RouterLink>
      </li>
      <MenuItem
        v-for="(navBarItem, index) in items"
        :actived="navBarItem.title === useRoute().name"
        :key="index"
        :path="navBarItem.path"
        :label="navBarItem.label"
        :title="navBarItem.title"
        :icon="navBarItem.icon as unknown as VueElement"
        :theme="{
          label: `px-4 text-green-700 dark:text-green-100 text-lg hidden lg:inline lg:pl-6`,
          icon: `w-[1.5rem] h-[1.5rem] align-middle lg:mb-2 stroke-2 stroke-green-700 dark:stroke-green-200`,
          item: 'block text-md w-full text-green-900 dark:text-gray-300 px-6 py-4 rounded-md lg:pl-8',
        }"
      />
    </ul>
    <div
      class="flex items-center lg:block lg:pl-8"
      data-test="navbar-center-content"
    >
      <RouterLink to="/profile" title="view profile" class="p-1 px-2 lg:px-0">
        <UserAvatar :name="user.name" :picture="user.picture" />
      </RouterLink>
      <div class="mt-8 hidden lg:flex">
        <ThemeButton
          class="hidden items-center lg:inline-block"
          :theme="theme"
          @toggle="toggleTheme"
        />
        <span class="dark:text-gray-200 px-4 text-lg">{{
          `${theme[0].toUpperCase()}${theme.slice(1)}`
        }}</span>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import ThemeButton from "./button/ThemeButton.vue";
import UserAvatar from "./UserAvatar.vue";
import MenuItem from "./menu/MenuItem.vue";
import { VueElement, onMounted, ref } from "vue";
import type { MenuItem as MenuItemType } from "@/utils/type";
import { useRoute } from "vue-router";

defineProps({
  items: {
    type: Array<MenuItemType>,
    required: true,
  },
  user: {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    type: Object,
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
