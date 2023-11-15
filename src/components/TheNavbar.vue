<template>
  <nav
    :class="[
      'w-full top-0 dark:border-gray-700 px-4 py-1 bg-white dark:bg-gray-900 z-20 fixed lg:sticky',
      (isScrolled || !isHomePage) && 'shadow-md',
    ]"
  >
    <div class="flex justify-between items-center lg:hidden">
      <ButtonWrapper @click="shouldShowMenu = !shouldShowMenu">
        <PlusIcon
          v-if="shouldShowMenu"
          class="rotate-45 dark:stroke-gray-100"
        />
        <ListIcon class="dark:stroke-gray-100" v-else />
      </ButtonWrapper>
      <div class="w-full flex justify-center items-center mt-2">
        <RouterLink
          to="/"
          data-test="app-logo-link-mobile"
          v-if="!shouldShowMenu"
          class="text-xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500 pl-4 py-4"
        >
          <img src="@/assets/images/logo.svg" alt="" class="w-8 rotate-45" />
          uonte
        </RouterLink>
      </div>
    </div>
    <div
      :class="[
        'lg:flex justify-between lg:w-full',
        shouldShowMenu ? 'block' : 'hidden',
      ]"
    >
      <ul
        class="flex flex-col items-center w-full justify-between lg:flex-row lg:w-fit"
        data-test="navbar-left-content"
      >
        <li data-test="app-logo-link">
          <RouterLink
            to="/"
            class="text-transparent flex items-center justify-center bg-clip-text bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500 px-4 py-4 lg:mr-8"
          >
            <img src="@/assets/images/logo.svg" alt="" class="w-10 rotate-45" />
            <span class="text-3xl font-bold lg:text-xl">Quonte</span>
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
      <ul
        class="flex w-full flex-col items-center lg:flex-row lg:w-auto"
        data-test="navbar-center-content"
      >
        <div class="lg:flex py-4 lg:py-0">
          <MenuItem
            v-for="(navBarItem, index) in navBarItems.center"
            :key="index"
            :path="navBarItem.path"
            :label="navBarItem.label"
            :title="navBarItem.title"
            :theme="navBarItem.theme"
          />
        </div>
        <div
          class="flex flex-col items-center justify-center py-4 lg:py-0 lg:flex-row"
        >
          <div class="-r h-1/3 border-r-gray-200 dark:border-r-gray-700 mx-6" />
          <li>
            <ThemeButton :theme="theme" @toggle="toggleTheme" />
          </li>
          <div
            class="border-r h-1/3 border-r-gray-200 dark:border-r-gray-700 mx-6"
          />
          <div data-test="navbar-right-content" class="flex">
            <LinkWrapper
              v-for="(item, index) in navBarItems.right"
              :key="index"
              :path="item.path"
              isExternal
              class="block p-2 px-3 mr-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <component :is="item.icon" class="w-5 h-5 dark:fill-gray-100" />
            </LinkWrapper>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import ThemeButton from "./button/ThemeButton.vue";
import MenuItem from "./menu/MenuItem.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import type { MenuItem as MenuItemType } from "@/utils/type";
import LinkWrapper from "./LinkWrapper.vue";
import ButtonWrapper from "@/components/button/ButtonWrapper.vue";
import ListIcon from "./icons/ListIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import { useRoute } from "vue-router";

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

const isScrolled = ref<boolean>(false);

const onScroll = () => {
  if (document.documentElement.scrollTop > 500) {
    isScrolled.value = true;
    return;
  }
  isScrolled.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const shouldShowMenu = ref<boolean>(false);

const isHomePage = ref(useRoute().name === "home");
</script>
