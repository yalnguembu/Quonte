<template>
  <div class="w-full">
    <label for="" class="font-500">{{ props.label }}</label>
    <input
      class="rounded border px-4 py-3 w-full mt-2"
      type="text"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target?.value)"
    />
    <p v-if="props.error">{{ props.error }}</p>
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
