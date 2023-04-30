<template>
  <div class="w-full" data-test="password-input">
    <label for="" class="font-500 dark:text-gray-100">{{ props.label }}</label>
    <div
      :class="[
        'rounded border px-3 py-3 w-full mt-2 dark:border-gray-500',
        { 'border-red-500': props.error },
      ]"
    >
      <LockIcon class="stroke-gray-500" />
      <input
        class="bg-transparent px-3 outline-none dark:text-gray-100"
        type="password"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="(event :Event)=>emit('update:modelValue', (event.target as HTMLInputElement).value)"
      />
    </div>
    <p v-if="props.error" class="text-red-500">{{ props.error }}</p>
  </div>
</template>
<script setup lang="ts">
import LockIcon from "../icons/LockIcon.vue";

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
