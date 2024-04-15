<template>
  <div class="w-full">
    <label class="font-500 dark:text-gray-100" data-test="email-input-label">
      {{ label }}
    </label>
    <input
      :class="[
        'rounded border px-3 py-1 w-full mt-2 bg-transparent outline-none dark:text-gray-100 dark:border-gray-700',
        isValid
          ? 'outline-green-500 dark:outline-green-600'
          : errors.length
          ? 'outline-red-500'
          : 'focus:outline-blue-500 dark:focus:outline-blue-600',
      ]"
      type="email"
      :placeholder="placeholder"
      :value="modelValue"
      @input="(event :Event)=>emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />
    <p
      :data-test="`email-input-error-${error.$uid}`"
      v-for="error in errors"
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

withDefaults(
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
