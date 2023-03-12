<template>
  <div class="flex flex-row jusitfy-between align-center relative">
    <button
      class="flex flex-row justify-between items-center"
      @click.stop="toggleMenuVisibility"
    >
      <UserAvatar name="Yal nguembu" :path="Image" />
      <p class="px-3 text-bold text-gray-500 hidden lg:block">
        <span class="mr-1">{{ props.email }}</span>
        <ChevronDown class="h-3 w-3 inline" />
      </p>
    </button>
    <div
      @click="toggleMenuVisibility"
      ref="accountButton"
      v-if="isMenuVisible"
      class="rounded border bg-white absolute top-12 right-0 w-52 text-gray-500 shadow-lg"
    >
      <ul>
        <li>
          <RouterLink
            to="/profile"
            class="block w-full text-left p-3 px-4 hover:bg-gray-100"
          >
            <UserIcon class="mr-3" /> Account
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/profile"
            class="block w-full text-left p-3 px-4 hover:bg-gray-100"
          >
            <InformationIcon class="mr-3" /> Get help
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/logout" class="block px-4 p-3 hover:bg-gray-100">
            <LogoutIcon class="mr-3" /> Logout
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import Image from "@/assets/images/me.png";
import ChevronDown from "./icons/ChevronDownIcon.vue";
import UserIcon from "./icons/UserIcon.vue";
import LogoutIcon from "./icons/LogoutIcon.vue";
import InformationIcon from "./icons/InformationIcon.vue";
import UserAvatar from "./UserAvatar.vue";
import { ref } from "vue";
import { useOnClickOutSide } from "@/utils/useOnClickOutside";

const accountButton = ref<HTMLButtonElement | undefined>();
const isMenuVisible = ref<boolean>(false);

const toggleMenuVisibility = () => (isMenuVisible.value = !isMenuVisible.value);

useOnClickOutSide(accountButton, () => {
  if (isMenuVisible.value) toggleMenuVisibility();
});

const props = withDefaults(
  defineProps<{
    email: string;
    picture?: string;
  }>(),
  { picture: "default-picture.jpg" }
);
</script>
