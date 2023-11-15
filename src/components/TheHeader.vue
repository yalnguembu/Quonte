<template>
  <section>
    <div
      class="w-full items-center p-4 pb-5 justify-between border-b dark:border-b-gray-700 lg:flex"
    >
      <h1 class="font-bold text-3xl text-left dark:text-gray-200 mb-4 lg:mb-0">
        {{ title }}
      </h1>
      <SearchInput
        v-model="query"
        @update:modelValue="$emit('search', query)"
        placeholder="Search in notes..."
        class="w-full lg:w-1/3"
        resizable
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SearchInput from "./form/SearchInput.vue";

defineEmits<{
  (event: "search", query: string): string;
}>();

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const query = ref<string>("");
</script>
