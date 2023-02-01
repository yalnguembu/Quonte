<template>
  <li class="py-4 border-b">
    <UserAvatar class="inline" name="Yal nguembu" :path="Image" />
    <span class="ml-2 text-lg text-gray-700">{{ props.member }}</span>
  </li>
</template>
<script setup lang="ts">
import Image from "@/assets/images/me.png";
import UserAvatar from "./UserAvatar.vue";
interface Props {
  member: string;
}
const props = defineProps<Props>();
</script>
