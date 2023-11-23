<template>
  <section
    class="w-full h-14 fixed bottom-0 z-20 lg:h-screen lg:static lg:w-1/6 xl:w-1/5"
  >
    <nav
      class="h-full border-r dark:border-r-gray-700 flex justify-between py-1 bg-white dark:bg-gray-900 lg:flex-col lg:p-0"
    >
      <ul
        class="flex items-center w-3/4 justify-between py-6 lg:w-full lg:block"
        data-test="navbar-left-content"
      >
        <li data-test="app-logo-link" class="h-28 hidden lg:block">
          <RouterLink
            to="/"
            class="w-full text-xl font-bold text-transparent flex items-center px-4 py-4 mr-8"
          >
            <img
              src="@/assets/images/logo.svg"
              alt=""
              class="w-12 rotate-45 xl:w-16"
            />
            <span
              class="bg-clip-text text-3xl bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500 xl:text-4xl"
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
            label: `px-4 text-green-700 dark:text-green-100 text-lg hidden lg:inline lg:pl-3 xl:px-6`,
            icon: `w-[1.5rem] h-[1.5rem] align-middle lg:mb-2 stroke-2 stroke-green-700 dark:stroke-green-200`,
            item: 'block text-md w-full text-green-900 dark:text-gray-300 px-2 py-4 rounded-md lg:pl-6 hover:bg-green-100 hover:rounded-none dark:hover:bg-gray-800 xl:px-6 xl:pl-8',
          }"
        />
      </ul>
      <div class="flex items-center lg:block" data-test="navbar-center-content">
        <ButtonWrapper
          data-test="profile-button"
          @click.stop="toggleIsUserProfileVisible"
          class="py-1 mr-2 w-full hover:bg-green-100 dark:hover:bg-gray-800 lg:px-0 lg:pl-6 lg:block lg:py-4 xl:pl-8"
        >
          <UserAvatar :username="user.username" :picture="user.picture" />
        </ButtonWrapper>
        <div
          class="hidden py-4 hover:bg-green-100 dark:hover:bg-gray-800 lg:flex lg:pl-6 xl:pl-8"
        >
          <span class="dark:text-gray-200 text-gray-700 pr-4 text-lg">{{
            `${theme[0].toUpperCase()}${theme.slice(1)}`
          }}</span>
          <ThemeButton
            class="hidden items-center lg:inline-block"
            :theme="theme"
            @toggle="toggleTheme"
          />
        </div>
      </div>
    </nav>
    <UserDetailsPreview
      class="absolute bottom-14 left-0 lg:bottom-40 lg:left-20 lg:w-[25rem]"
      v-bind="{
        email: user.email,
        picture: user.picture,
        username: user.username,
      }"
      v-if="isUserProfileVisible"
      @close="toggleIsUserProfileVisible"
      @signOut="
        () => {
          toggleIsSignOutModalVisible();
          toggleIsUserProfileVisible();
        }
      "
    />
    <SignOutModal
      v-if="isSignOutModalVisible"
      @close="toggleIsSignOutModalVisible"
    />
  </section>
</template>
<script lang="ts" setup>
import ThemeButton from "./button/ThemeButton.vue";
import UserAvatar from "./UserAvatar.vue";
import MenuItem from "./menu/MenuItem.vue";
import ButtonWrapper from "./button/ButtonWrapper.vue";
import {VueElement, onMounted, ref, defineAsyncComponent} from "vue";
import type { MenuItem as MenuItemType } from "@/utils/type";
import { useRoute } from "vue-router";
import SignOutModal from "./modal/SignOutModal.vue";
import { useSessionStore } from "@/stores/session";

const UserDetailsPreview = defineAsyncComponent(() => import("@/components/modal/UserDetailsPreview.vue"));

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
const user = useSessionStore().session;
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

const isUserProfileVisible = ref<boolean>(false);

const toggleIsUserProfileVisible = (): void => {
  isUserProfileVisible.value = !isUserProfileVisible.value;
};

const isSignOutModalVisible = ref<boolean>(false);

const toggleIsSignOutModalVisible = (): void => {
  isSignOutModalVisible.value = !isSignOutModalVisible.value;
};
</script>
