<template>
  <div class="w-full">
    <label class="font-500 dark:text-gray-100">{{ props.label }}</label>
    <textarea
      :class="[
        'rounded border h-32 px-3 py-1 w-full mt-2 bg-transparent outline-none dark:text-gray-100 dark:border-gray-700',
        errors.length
          ? 'outline-red-500'
          : isValid
          ? 'outline-green-500 dark:outline-green-600'
          : 'focus:outline-blue-500 dark:focus:outline-blue-600',
      ]"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="(event :Event)=>emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />
    <p
      :data-test="error.$property"
      v-show="props.errors?.length"
      v-for="error in props.errors"
      :key="error.$uid"
      class="pt-1 text-red-500 transition delay-500 text-sm"
    >
      {{ error.$message }}
    </p>
  </div>
</template>
<script setup lang="ts">
import type { ErrorObject } from "@vuelidate/core";

const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    placeholder?: string;
    errors?: ErrorObject[];
    isValid?: boolean;
  }>(),
  {
    isValid: false,
    errors: () => [],
  }
);
</script>
