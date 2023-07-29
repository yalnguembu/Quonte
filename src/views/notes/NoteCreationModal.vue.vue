<template>
  <ModalWrapper @close="() => {}">
    <form
      class="p-4 shadow-lg h-full justify-self-end w-full lg:w-2/5 p-8 py-4 bg-white dark:bg-gray-900 h-screen dark:text-gray-100 overflow-y-auto"
      @submit.prevent="() => v$.$touch()"
    >
      <div
        class="h-full w-full flex justify-center items-center"
        v-if="isNoteDataSaving"
      >
        <LargeSpiner />
      </div>
      <div
        v-else-if="isNoteDataSave"
        class="h-full w-full flex flex-col justify-center items-center"
      >
        <CheckCircleIcon
          class="w-32 h-32 stroke-green-500 dark:stroke-green-300"
        />
        <p class="text-gray-500 mt-8 text-lg">Note created successfully</p>
      </div>
      <div v-else>
        <div class="flex justify-between items-center sticky top-0 left-0">
          <h4
            class="font-bold dark:text-gray-200 text-xl py-4 sticky top-0 left-0 w-full bg-white dark:bg-gray-900"
          >
            New note
          </h4>
          <button @click.stop="emit('close')">
            <PlusIcon class="rotate-45" />
          </button>
        </div>
        <AlertBox
          :alertType="ALERT_BOX_TYPE.INFO"
          title="Information:"
          summary="La taille maximal du tire est de 50 caracteres et celle de la description est de 350. Vous avez la possibilite d'ajouter au moins un tag et 5 au maximum"
        />
        <div class="my-4">
          <TextInput
            v-model="title"
            label="Title *"
            placeholder="Enter a title"
            :errors="v$.title.$errors"
          />
        </div>
        <div class="mb-4">
          <TagInput
            v-model="tags"
            label="Tag"
            placeholder="Choose a tag"
            :tags="tagsList"
            :errors="v$.tags.$errors"
          />
        </div>
        <div class="mb-4">
          <TextareaInput
            v-model="description"
            label="Title"
            placeholder="Enter a title"
            :errors="v$.description.$errors"
          />
        </div>
        <BaseButton
          class="w-full mt-4 sticky bottom-0"
          title="Create"
          data-test="submit-button"
          :disable="v$.$silentErrors.length"
          :type="ButtonType.submit"
          :theme="`w-full py-1 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg transition ${
            v$.$silentErrors.length && 'opacity-30 cursor-not-allowed'
          }`"
          @click="create"
        />
      </div>
    </form>
  </ModalWrapper>
</template>
<script lang="ts" setup>
import { computed, shallowRef } from "vue";
import TagInput from "@/components/form/TagInput.vue";
import { ButtonType } from "@/utils/type";
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, helpers } from "@vuelidate/validators";
import { ALERT_BOX_TYPE } from "@/utils/enum";
import ModalWrapper from "@/components/ModalWrapper.vue";
import BaseButton from "@/components/button/BaseButton.vue";
import TextInput from "@/components/form/TextInput.vue";
import TextareaInput from "@/components/form/TextareaInput.vue";
import AlertBox from "@/components/AlertBox.vue";
import LargeSpiner from "@/components/LargeSpiner.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon.vue";

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
  {
    id: "1234-5678-5678-abcd",
    title: "javascript",
  },
  {
    id: "4567-4321-5678-abcd",
    title: "typescript",
  },
  {
    id: "9808-4321-5678-abcd",
    title: "unit test",
  },
  {
    id: "jklm-4321-5678-abcd",
    title: "VueJS",
  },
];

const title = shallowRef<string>("");
const tags = shallowRef<string[]>([]);
const description = shallowRef<string>("");
const isNoteDataSaving = shallowRef<boolean>(false);
const isNoteDataSave = shallowRef<boolean>(false);

const customMaxLentgth = (length: number, element = "character") =>
  helpers.withMessage(
    ({ $model }) =>
      `You have exceeded the limit, please remove ${$model.length - length} ${
        element + ($model.length ? "s" : "")
      }`,
    maxLength(length)
  );

const rules = computed(() => ({
  title: {
    required: helpers.withMessage(
      "You may forgot to field this input",
      required
    ),
    maxLength: customMaxLentgth(50),
    $autoDirty: true,
  },
  description: {
    maxLength: customMaxLentgth(500),
    $autoDirty: true,
  },
  tags: {
    maxLength: customMaxLentgth(5, "tag"),
    $autoDirty: true,
  },
}));

const v$ = useVuelidate(
  rules,
  {
    title,
    description,
    tags,
  },
  { $stopPropagation: true }
);

// const closeModal = () => {
// emit("close")
//   v$.value.$reset();
// };

const create = async () => {
  if (!(await v$.value.$validate())) return;
  isNoteDataSaving.value = true;

  setTimeout(() => {
    isNoteDataSaving.value = false;
    isNoteDataSave.value = true;
  }, 2000);

  setTimeout(() => emit("close"), 3000);
};
</script>
