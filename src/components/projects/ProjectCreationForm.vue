<template>
  <ModalWrapper @close="emit('close')">
    <div class="shadow-lg bg-white rounded-lg m-0 p-4 md:p-8 md:2/3">
      <h1 class="font-bold text-2xl">New project</h1>
      <form class="mt-6" @submit.prevent="create">
        <div class="my-4">
          <TextInput
            label="Name"
            v-model="name"
            placeholder="Enter the name of the project"
            error=""
          />
        </div>
        <div class="my-4">
          <TextInput
            label="Team"
            v-model="team"
            placeholder="Enter the name of the project"
            error=""
          />
        </div>
        <div class="my-4">
          <TextAreaInput
            rows="3"
            v-model="description"
            label="Description"
            placeholder="Enter the description of the project"
            error=""
          />
        </div>
        <div class="mt-4 flex flex-row justify-between items-center">
          <ImageInput label="Image" v-model="image" error="" />
          <BaseButton title="Create" type="submit" />
        </div>
      </form>
    </div>
  </ModalWrapper>
</template>
<script setup lang="ts">
import TextInput from "../form/TextInput.vue";
import TextAreaInput from "../form/TextAreaInput.vue";
import ImageInput from "../form/ImageInput.vue";
import BaseButton from "../BaseButton.vue";
import ModalWrapper from "../ModalWrapper.vue";
import { ref } from "vue";

const name = ref<string>("");
const image = ref<string>("");
const team = ref<string>("");
const description = ref<string>("");
const emit = defineEmits(["close"]);

const create = (): void => {
  emit("close");
};
</script>
