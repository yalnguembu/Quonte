<template>
  <div class="w-full">
    <label class="font-500 dark:text-gray-100">{{ label }}</label>
    <div
      :class="[
        'rounded border px-3 py-1 w-full flex mt-2 bg-transparent outline-none dark:text-gray-100 dark:border-gray-700',
        isValid
          ? 'outline-green-500 dark:outline-green-600'
          : errors.length
          ? 'outline-red-500'
          : isFocus
          ? 'focus:outline-blue-500 dark:focus:outline-blue-600'
          : '',
      ]"
    >
      <input
        class="bg-transparent px-3 outline-none dark:text-gray-100 w-full"
        :type="isTextVisible ? 'text' : 'password'"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @focus="toggleIsFocus"
        @blur="toggleIsFocus"
        @input="(event :Event)=>emit('update:modelValue', (event.target as HTMLInputElement).value)"
      />
      <button @click="toggleIstextVisible" class="outline-none" type="button">
        <EyeIcon class="w-[1.2rem]" v-show="isTextVisible" />
        <EyeSlashIcon class="w-[1.2rem]" v-show="!isTextVisible" />
      </button>
    </div>
    <p
      :data-test="`error-${error.$uid}`"
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
import { shallowRef } from "vue";
import EyeIcon from "../icons/EyeIcon.vue";
import EyeSlashIcon from "../icons/EyeSlashIcon.vue";

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

const isTextVisible = shallowRef<boolean>(false);
const toggleIstextVisible = () => (isTextVisible.value = !isTextVisible.value);

const isFocus = shallowRef<boolean>(false);
const toggleIsFocus = () => (isFocus.value = !isFocus.value);
</script>
