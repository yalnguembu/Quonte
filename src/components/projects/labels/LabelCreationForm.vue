<template>
  <ModalWrapper @close="emit('close')">
    <div class="shadow-lg bg-white rounded-lg m-0 p-4 md:p-8 md:2/3">
      <h1 class="font-bold text-2xl">New Label</h1>
      <form class="mt-6" @submit.prevent="create">
        <div class="grid gap-4">
          <TextInput
            label="Title"
            v-model="label.title"
            placeholder="Enter the name of the project"
            error=""
          />
          <ColorPicker
            class="my-2"
            label="color"
            v-model="label.color"
            placeholder="Enter the name of the project"
            error=""
          />
          <TextAreaInput
            v-model="label.description"
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
    </div>
  </ModalWrapper>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import ColorPicker from "@/components/form/ColorPicker.vue";
import TextInput from "@/components/form/TextInput.vue";
import ModalWrapper from "@/components/ModalWrapper.vue";
import TextAreaInput from "@/components/form/TextAreaInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useLabelStore } from "@/stores/label";
import { COLORS } from "@/utils/enum";
const labelStore = useLabelStore();
const label = reactive({
  title: "",
  description: "",
  color: COLORS.GREEN,
});

const emit = defineEmits(["close"]);

const create = (): void => {
  labelStore.create({
    id: Math.random() * 10,
    ...label,
    tasks: [0],
  });
  emit("close");
};
</script>
