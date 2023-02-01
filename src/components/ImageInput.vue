<template>
  <div class="w-full">
    <label class="font-500">{{ props.label }}</label>
    <label
      for="file"
      class="px-3 py-[10px] ml-4 rounded cursor-ponter hover:bg-green-400"
    >
      <CameraIcon />
    </label>
    <input
      id="file"
      :rows="props.rows"
      class="hidden"
      type="file"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <p v-if="props.error">{{ props.error }}</p>
  </div>
</template>
<script setup lang="ts">
import CameraIcon from "./icons/CameraIcon.vue";
interface Props {
  modelValue: string;
  label: string;
  placeholder?: string;
  error?: string;
  rows?: string;
}
const emit = defineEmits(["update:modelValue"]);
const props = defineProps<Props>();
</script>
