<template>
  <button
    class="p-2 rounded hover:bg-gray-100 text-gray-500 mr-2"
  >
    <SearchIcon class="text-gray-500 fill-sm" />
  </button>
  <section
    v-if="isVisible"
    class="fixed inset-0 w-full h-full bg-gray-100 flex flex-row items-center justify-center"
  >
    <div class="w-96 bg-white rounded p-4">
      <SearchInput @input="() => {}" />
      <ul>
        <li v-for="item in 6" :key="item">
          <a href="/" class="py-2 px-2 block hover:bg-gray-200">search item</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import SearchIcon from "./icons/SearchIcon.vue";
import SearchInput from "./forms/SearchInput.vue";
import { ref } from "vue";

const isVisible = ref(false);
const isTyping = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>
