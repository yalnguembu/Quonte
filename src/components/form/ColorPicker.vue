<template>
  <div class="w-full">
    <div class="w-full flex justify-between items-center">
      <label for="" class="font-500 text-xl">{{ props.label }}</label>
      <div class="ml-4 w-full flex justify-between">
        <label
          for="blue"
          :class="[
            'p-1 ml-3  rounded-full border-2',
            { 'border-blue-500': COLORS.BLUE == color },
          ]"
        >
          <div
            class="h-8 w-8 inline-block align-middle rounded-full bg-blue-500"
          ></div>
        </label>
        <input
          type="radio"
          id="blue"
          name="color"
          :value="COLORS.BLUE"
          v-model="color"
          class="hidden"
        />
        <label
          for="green"
          :class="[
            'p-1 ml-3 rounded-full border-2',
            { 'border-green-500': COLORS.GREEN == color },
          ]"
        >
          <div
            class="h-8 w-8 inline-block align-middle rounded-full bg-green-500"
          ></div
        ></label>
        <input
          type="radio"
          id="green"
          name="color"
          :value="COLORS.GREEN"
          v-model="color"
          class="hidden"
        />
        <label
          for="brown"
          :class="[
            'p-1 ml-3 rounded-full border-2',
            { 'border-amber-900': COLORS.BROWN == color },
          ]"
          ><div
            class="h-8 w-8 inline-block align-middle rounded-full bg-amber-900"
          ></div>
        </label>
        <input
          type="radio"
          id="red"
          name="color"
          :value="COLORS.RED"
          v-model="color"
          class="hidden"
        />
        <label
          for="yellow"
          :class="[
            'p-1 ml-3 rounded-full border-2',
            { 'border-yellow-500': COLORS.YELLOW == color },
          ]"
          ><div
            class="h-8 w-8 inline-block align-middle rounded-full bg-yellow-500"
          ></div>
        </label>
        <input
          type="radio"
          id="pink"
          name="color"
          :value="COLORS.PINK"
          v-model="color"
          class="hidden"
        />
        <label
          for="orange"
          :class="[
            'p-1 ml-3 rounded-full border-2',
            { 'border-orange-500': COLORS.ORANGE == color },
          ]"
        >
          <div
            class="h-8 w-8 inline-block align-middle rounded-full bg-orange-500"
          ></div>
        </label>
        <input
          type="radio"
          id="brown"
          name="color"
          :value="COLORS.BROWN"
          v-model="color"
          class="hidden"
        />
        <label
          for="pink"
          :class="[
            'p-1 ml-3 rounded-full border-2',
            { 'border-pink-500': COLORS.PINK == color },
          ]"
          ><div
            class="h-8 w-8 inline-block align-middle rounded-full bg-pink-500"
          ></div
        ></label>
        <input
          type="radio"
          id="yellow"
          name="color"
          :value="COLORS.YELLOW"
          v-model="color"
          class="hidden"
        />
        <label
          for="red"
          :class="[
            'p-1 ml-3 border-2 rounded-full',
            { 'border-red-500': COLORS.RED == color },
          ]"
          ><div
            class="h-8 w-8 inline-block align-middle rounded-full bg-red-500"
          ></div
        ></label>
        <input
          type="radio"
          id="orange"
          name="color"
          :value="COLORS.ORANGE"
          v-model="color"
          class="hidden"
        />
      </div>
    </div>
    <p v-if="props.error">{{ props.error }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { COLORS } from "@/utils/enum";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label: string;
    error?: string;
  }>(),
  { error: "" }
);

const color = ref<string>(props.modelValue);
watch(color, (value: string) => {
  emit("update:modelValue", value);
});
const emit = defineEmits(["update:modelValue"]);
</script>
