<template>
  <input
    type="text"
    :class="[
      'w-full bg-transparent outline-none w-full flex flex-row jusitfy-between align-center h-10 py-2 mb-2 border-b-2',
    ]"
    name="search"
    v-model="state.search"
    placeholder="search"
    @focus="toggleIsTyping, emit('focus:searchInput')"
    @blur="toggleIsTyping, emit('blur:searchInput')"
  />
</template>
<script setup lang="ts">
import { reactive } from "vue";

const emit = defineEmits(["focus:searchInput", "blur:searchInput"]);

const state = reactive({
  search: "",
  isTyping: false,
});

const toggleIsTyping = (): void => {
  state.isTyping = !state.isTyping;
};
</script>
