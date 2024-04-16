<template>
  <div
    :class="[
      'bg-transparent flex h-10 px-4 p-2 border dark:border-gray-600 rounded',
    ]"
  >
    <SearchIcon class="text-gray-500 align-middle" />
    <input
      :class="[
        'w-full bg-transparent ml-3 outline-none dark:text-gray-100 ',
        { resizable: 'hidden md:block' },
      ]"
      type="search"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="(event :Event)=>emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />
  </div>
</template>
<script setup lang="ts">
import SearchIcon from "../icons/SearchIcon.vue";
const props = withDefaults(
  defineProps<{
    modelValue: string;
    placeholder?: string;
    resizable: boolean;
  }>(),
  {
    placeholder: "",
  }
);
const emit = defineEmits(["update:modelValue"]);
</script>
