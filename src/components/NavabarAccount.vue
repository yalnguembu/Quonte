<template>
  <header class="flex flex-row jusitfy-between align-center">
    <button class="flex flex-row justify-between items-center">
      <UserAvatar name="Yal nguembu" :path="Image" />
      <p class="px-3 text-bold text-gray-500 hidden lg:block">
        <span class="mr-1">Mazeking</span>
        <ChevronDown class="h-3 w-3 inline" />
      </p>
    </button>
  </header>
</template>
<script setup lang="ts">
import Image from "@/assets/images/me.png";
import ChevronDown from "./icons/ChevronDownIcon.vue";
import UserAvatar from "./UserAvatar.vue";
</script>
