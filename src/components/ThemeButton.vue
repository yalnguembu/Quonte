<template>
  <div class="inline-block">
    <button
      @click="emit('toggle')"
      :class="[
        'border rounded-full w-12 flex',
        theme === 'dark'
          ? 'justify-end bg-gray-800 border-gray-800'
          : 'justify-start bg-gray-100 border-gray-200',
      ]"
    >
      <div class="rounded-full bg-gray-900" v-if="theme === 'dark'">
        <LunaIcon class="w-[1.3rem] h-[1.3rem] stroke-gray-100" />
      </div>
      <div class="rounded-full bg-gray-300" v-else>
        <SunIcon class="w-5 h-5 stroke-gray-800" />
      </div>
    </button>
  </div>
</template>
<script setup lang="ts">
import SunIcon from "./icons/SunIcon.vue";
import LunaIcon from "./icons/LunaIcon.vue";

const emit = defineEmits(["toggle"]);
defineProps({
  theme: {
    type: String,
    default: "light",
  },
});
</script>
