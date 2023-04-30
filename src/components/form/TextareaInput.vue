<template>
  <div class="w-full">
    <label class="font-500 dark:text-gray-100">{{ props.label }}</label>
    <textarea
      rows=""
      class="rounded border h-32 px-4 py-1 w-full mt-2 bg-transparent dark:text-gray-100 dark:border-gray-700 outline-none dark:focus:outline-green-800"
      type="text"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="(event :Event)=>emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />
    <p v-if="props.error">{{ props.error }}</p>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    placeholder?: string;
    error?: string;
  }>(),
  {
    error: "",
    placeholder: "",
  }
);
</script>
