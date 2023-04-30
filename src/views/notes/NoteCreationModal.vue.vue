<template>
  <ModalWrapper @close="() => $emit('close')">
    <div
      class="p-4 shadow-lg h-full justify-self-endw-full lg:w-1/3 p-8 py-4 bg-white dark:bg-gray-900 h-screen dark:text-gray-100 overflow-y-auto"
    >
      <h4
        class="font-bold dark:text-gray-200 text-xl py-4 sticky top-0 left-0 w-full bg-white dark:bg-gray-900"
      >
        New note
      </h4>
      <AlertBox
        title="Information:"
        summary="La taille maximal du tire est de 50 caracteres et celle de la description est de 350. Vous ne pouvez ajouter au jusqua 4 tags a votre note!"
      />
      <div class="my-4">
        <TextInput
          v-model="title"
          label="Title *"
          placeholder="Enter a title"
        />
      </div>
      <div class="mb-4">
        <TagInput
          v-model="tags"
          label="Tag"
          :tags="tagsList"
          placeholder="Choose a tag"
        />
      </div>
      <div class="mb-4">
        <TextareaInput
          v-model="description"
          label="Title"
          placeholder="Enter a title"
        />
      </div>
      <BaseButton
        title="Create"
        data-test="submit-button"
        :type="ButtonType.submit"
        class="w-full mt-4 sticky bottom-0"
        theme="w-full py-1 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
        @click="filter"
      />
    </div>
  </ModalWrapper>
</template>
<script lang="ts" setup>
import { shallowRef } from "vue";
import TagInput from "@/components/form/TagInput.vue";
import { ButtonType, type Tag } from "@/utils/type";
import ModalWrapper from "@/components/ModalWrapper.vue";
import BaseButton from "@/components/button/BaseButton.vue";
import TextInput from "@/components/form/TextInput.vue";
import TextareaInput from "@/components/form/TextareaInput.vue";
import AlertBox from "@/components/AlertBox.vue";

const emit = defineEmits(["close"]);

const tagsList = [
  {
    id: "1234-4321-5678-abcd",
    title: "e2e tests",
  },
  {
    id: "4321-4321-5678-abcd",
    title: "cypress",
  },
  {
    id: "abcd-4321-5678-abcd",
    title: "testing",
  },
];

const tags = shallowRef<Tag[]>([]);
const title = shallowRef<string>("");
const description = shallowRef<string>("");

const filter = () => {};
</script>
