<template>
  <ModalWrapper @close="() => {}" data-test="note-creation-modal">
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
      <div v-else>
        <div
          class="w-full flex justify-between items-center sticky top-0 left-0 bg-white dark:bg-gray-900"
        >
          <h2 class="font-bold dark:text-gray-200 text-xl py-4 w-full">
            New note
          </h2>
          <button @click.stop="emit('close')">
            <PlusIcon class="rotate-45" />
          </button>
        </div>
        <AlertBox
          :alertType="ALERT_BOX_TYPE.INFO"
          title="Information:"
          summary="La taille maximal du tire est de 50 caracteres. Vous avez la possibilite d'ajouter 1 a 5 tag(s)"
        />
        <div class="my-3">
          <TextInput
            v-model.trim="note.title"
            data-test="title"
            label="Title *"
            placeholder="Enter a title"
            :errors="v$.title.$errors"
          />
        </div>
        <div class="mb-3">
          <TagInput
            v-model="note.tags"
            label="Tag"
            data-test="tag"
            placeholder="Choose a tag"
            :tags="(tagsList as Tag[])"
            :errors="v$.tags.$errors"
          />
        </div>
        <div class="mb-2">
          <TextareaInput
            v-model.trim="note.content"
            data-test="content"
            label="Content"
            placeholder="Enter the Content"
            :errors="v$.content.$errors"
          />
        </div>
        <BaseButton
          class="w-full mt-3 sticky bottom-0"
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
import { computed, onBeforeMount, reactive, ref } from "vue";
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
import { useNoteStore } from "@/stores/note";
import { Note } from "@/domain/Note";
import type { NoteDTO } from "@/services";
import { useTagStore } from "@/stores/tag";
import { useSessionStore } from "@/stores/session";
import type { Tag } from "@/domain/Tag";

const emit = defineEmits<{
  (event: "close"): void;
  (event: "created", id: string): void;
}>();

const tagsList = ref<Tag[]>([]);
const isTagsListLoading = ref<boolean>(false);
const note = reactive<{ title: string; content: string; tags: Tag[] }>({
  title: "",
  content: "",
  tags: [],
});

const isNoteDataSaving = ref<boolean>(false);

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
  content: {
    maxLength: customMaxLentgth(500),
    $autoDirty: true,
  },
  tags: {
    maxLength: customMaxLentgth(5, "tag"),
    $autoDirty: true,
  },
}));

const v$ = useVuelidate(rules, note, { $stopPropagation: true });

const fectTagsList = async () => {
  isTagsListLoading.value = true;
  tagsList.value =
    (await useTagStore().getTagsByUserId(useSessionStore().session.id)) ?? [];
  isTagsListLoading.value = true;
};

onBeforeMount(() => {
  fectTagsList();
});

const create = async () => {
  if (!(await v$.value.$validate())) return;
  isNoteDataSaving.value = true;
  try {
    const newNote = new Note({} as NoteDTO);
    newNote.title = note.title;
    newNote.content = note.content;
    newNote.tags = note.tags;

    const savedNote = await useNoteStore().createNote(newNote);

    newNote.title = "";
    newNote.content = "";
    newNote.tags = [];

    emit("created", savedNote.id);
  } catch (error) {
    console.log(error);
  } finally {
    isNoteDataSaving.value = false;
  }
};
</script>
