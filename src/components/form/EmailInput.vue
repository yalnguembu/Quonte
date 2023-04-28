<template>
  <div class="w-full" data-test="email-input">
    <label class="font-500 dark:text-gray-100" data-test="email-input-label">{{
      props.label
    }}</label>
    <div
      :class="[
        'rounded border px-3 py-3 w-full mt-2 dark:border-gray-500',
        { 'border-red-500': props.error },
      ]"
    >
      <input
        class="bg-transparent px-3 outline-none"
        type="email"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="(event :Event)=>emit('update:modelValue', (event.target as HTMLInputElement).value)"
      />
    </div>
    <p
      v-if="props.error"
      class="text-red-500 text-sm"
      data-test="email-input-error-message"
    >
      {{ props.error }}
    </p>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(
  defineProps<{
    modelValue: string;
    label: string;
    placeholder?: string;
    error?: string;
  }>(),
  {
    error: "",
    placeholder: "",
  }
);
</script>
