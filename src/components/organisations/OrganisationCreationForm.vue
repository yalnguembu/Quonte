<template>
  <main
    class="z-30 fixed top-0 left-0 w-full h-full flex flex-row items-center justify-center bg-gray-500/25 backdrop-blur-[2px]"
  >
    <div
      class="shadow-lg bg-white rounded-lg p-4 md:p-8 md:2/3 lg:w-1/2 xl:w-2/5"
    >
      <h1 class="font-bold text-2xl">New organisation</h1>
      <form class="mt-6" @submit.prevent="create">
        <div class="my-4">
          <TextInput
            label="Name"
            v-model="organisation.name"
            placeholder="Enter the name of the organisation"
            error=""
          />
        </div>
        <div class="my-4">
          <TextAreaInput
            rows="3"
            v-model="organisation.description"
            label="Description"
            placeholder="Enter the description of the organisation"
            error=""
          />
        </div>
        <div class="mt-4 flex flex-row justify-between items-center">
          <ImageInput label="Image" v-model="organisation.image" error="" />
          <div class="flex">
            <button
              type="reset"
              @click="emit('close')"
              class="bg-gray-200 px-4 py-2 rounded-lg mr-4"
            >
              Cancel
            </button>
            <BaseButton title="Create" type="submit" />
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useOrganisationStore } from "@/stores/organisation";
import { useRouter } from "vue-router";
import TextInput from "../form/TextInput.vue";
import TextAreaInput from "../form/TextAreaInput.vue";
import ImageInput from "../form/ImageInput.vue";
import BaseButton from "../BaseButton.vue";

const organisationStore = useOrganisationStore();
const router = useRouter();

const organisation = reactive({
  name: "",
  image: "",
  description: "",
});

const emit = defineEmits(["close"]);

const create = (): void => {
  organisationStore.create(organisation);
  emit("close");
  router.push({ name: "organisations" });
};
</script>
