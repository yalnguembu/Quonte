<template>
  <div :class="['bg-transparent h-10 px-4 p-2 border rounded-xl']">
    <SearchIcon class="text-gray-500" />
    <input
      class="bg-transparent ml-3 outline-none"
      type="search"
      name="search"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="(event :Event)=>emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />
  </div>
</template>
<script setup lang="ts">
import SearchIcon from "../icons/SearchIcon.vue";
const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();
const emit = defineEmits(["update:modelValue"]);
</script>
