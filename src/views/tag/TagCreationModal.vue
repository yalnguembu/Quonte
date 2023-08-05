<template>
  <ModalWrapper @close="() => {}">
    <form
      class="p-4 shadow-lg h-full justify-self-end w-full lg:w-2/5 p-8 py-4 bg-white dark:bg-gray-900 h-screen dark:text-gray-100 overflow-y-auto"
      @submit.prevent="() => v$.$touch()"
    >
      <div
        class="h-full w-full flex justify-center items-center"
        v-if="isTagSaving"
      >
        <LargeSpiner />
      </div>
      <div
        v-else-if="istagCreated"
        data-test="tag-created-message"
        class="h-full w-full flex flex-col justify-center items-center"
      >
        <CheckCircleIcon
          class="w-32 h-32 stroke-green-500 dark:stroke-green-300"
        />
        <p class="text-gray-500 mt-8 text-lg">Tag created successfully</p>
      </div>
      <div v-else>
        <div class="flex justify-between items-center sticky top-0 left-0">
          <h4
            class="font-bold dark:text-gray-200 text-xl py-4 sticky top-0 left-0 w-full bg-white dark:bg-gray-900"
          >
            New Tag
          </h4>
          <button @click.stop="emit('close')">
            <PlusIcon class="rotate-45" />
          </button>
        </div>
        <AlertBox
          :alertType="ALERT_BOX_TYPE.INFO"
          title="Information:"
          summary="La taille maximal du tire est de 50 caracteres et celle de la description est de 350."
        />
        <div class="my-4">
          <TextInput
            v-model="title"
            label="Title *"
            data-test="tag-title-input"
            placeholder="Enter a title"
            :errors="v$.title.$errors"
          />
        </div>
        <div class="mb-4">
          <TextareaInput
            v-model="description"
            data-test="tag-description-input"
            label="Description"
            placeholder="Enter a title"
            :errors="v$.description.$errors"
          />
        </div>
        <BaseButton
          class="w-full mt-4 sticky bottom-0"
          title="Create"
          data-test="tag-creation-button"
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
import { Tag } from "@/domain/Tag";
import type { TagDTO } from "@/services";
import { useTagStore } from "@/stores/tag";
import { useRouter } from "vue-router";

const emit = defineEmits(["close", "created"]);

const title = shallowRef<string>("");
const tags = shallowRef<string[]>([]);
const description = shallowRef<string>("");
const isTagSaving = shallowRef<boolean>(false);
const istagCreated = shallowRef<boolean>(false);
const isTagNotSaved = shallowRef<boolean>(false);

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

const create = async () => {
  if (!(await v$.value.$validate())) return;
  isTagSaving.value = true;
  try {
    const newTag = new Tag({} as TagDTO);
    newTag.title = title.value;
    newTag.description = description.value;

    console.log(newTag);

    await useTagStore().createTag(newTag);
    istagCreated.value = true;
    title.value = "";
    description.value = "";
    emit("created");
  } catch (error) {
    console.log(error);
    isTagNotSaved.value = true;
  } finally {
    isTagSaving.value = false;
  }

  setTimeout(() => emit("close"), 3000);
};
</script>
