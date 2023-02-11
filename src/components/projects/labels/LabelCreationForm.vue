<template>
  <ModalWrapper @close="emit('close')">
    <h1 class="font-bold text-2xl">New Label</h1>
    <form class="mt-6" @submit.prevent="create">
      <div class="grid gap-4">
        <TextInput
          label="Title"
          v-model="title"
          placeholder="Enter the name of the project"
          error=""
        />
        <ColorPicker
          class="my-2"
          label="color"
          v-model="color"
          placeholder="Enter the name of the project"
          error=""
        />
        <TextAreaInput
          v-model="summary"
          label="Description"
          placeholder="Enter the description of the project"
          error=""
        />
      </div>
      <div class="flex justify-end mt-4">
        <button
          class="px-4 py-2 bg-gray-200 rounded-lg"
          type="reset"
          @click="emit('close')"
        >
          Cancel
        </button>
        <BaseButton class="ml-2" title="Create" type="submit" />
      </div>
    </form>
  </ModalWrapper>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ColorPicker from "@/components/form/ColorPicker.vue";
import TextInput from "@/components/form/TextInput.vue";
import ModalWrapper from "@/components/ModalWrapper.vue";
import TextAreaInput from "@/components/form/TextAreaInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useLabelStore } from "@/stores/label";
import { COLORS } from "@/utils/enum";

const labelStore = useLabelStore();
const title = ref<string>("");
const summary = ref<string>("");
const color = ref<string>("");

const emit = defineEmits(["close"]);

const create = (): void => {
  labelStore.create({
    id: Math.random() * 10,
    title: title.value,
    summary: summary.value,
    color: COLORS.GREEN,
    tasks: [0],
  });
  emit("close");
};
</script>
