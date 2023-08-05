<template>
  <ModalWrapper @close="() => $emit('close')">
    <div
      @click.self="() => {}"
      class="p-4 h-full justify-self-endw-full lg:w-1/3 p-8 bg-white dark:bg-gray-900 h-screen dark:text-gray-100"
    >
      <NoteDetailsSkeleton v-if="isNoteDetailsLoading" />
      <div v-else>
        <div class="flex justify-between items-center sticky top-0 left-0">
          <div class="flex items-center px-4">
            <h2 class="font-bold text-lg">Details</h2>
            <BaseButton
              theme="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-700 dark:hover:text-green-300 ml-4"
            >
              <template #icon-left>
                <PincelSquareIcon />
              </template>
            </BaseButton>
            <BaseButton
              theme="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-700 dark:hover:text-green-300 ml-4"
            >
              <template #icon-left>
                <ArchiveArrowDownIcon />
              </template>
            </BaseButton>
          </div>
          <button @click.stop="emit('close')">
            <PlusIcon class="rotate-45" />
          </button>
        </div>
        <div
          class="'bg-white w-full rounded-lg flex flex-col justify-between',"
        >
          <div
            class="p-4 flex-col justify-center overflow-hidden flex flex-col',"
          >
            <h4
              class="font-bold dark:text-gray-100 text-lg mt-2 w-full text-ellipsis whitespace-pre-all overflow-hidden break-word"
            >
              {{ noteDetails?.title }}
            </h4>

            <p class="font-sm text-gray-400 dark:text-gray-500 mt-2">
              {{ date().getPassedTime(noteDetails?.creationDate ?? "") }}
            </p>
            <div
              class="flex flex-row flex-wrap mt-2 max-h-20 overflow-y-hidden"
            >
              <RouterLink
                v-for="tagItem in noteDetails?.tags"
                :key="tagItem.id"
                :to="tagItem.id"
                class="max-w-full"
              >
                <TagItem :title="tagItem.title" :id="tagItem.id" />
              </RouterLink>
            </div>
          </div>
          <div>
            <div class="p-4 mb-3 max-h-40 w-full overflow-hidden">
              <p
                class="font-sm dark:text-gray-300 text-gray-500 whitespace-pre-all break-word text-ellipsis"
              >
                {{ noteDetails?.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModalWrapper>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref, shallowRef } from "vue";
import { date } from "@/utils/common";
import BaseButton from "@/components/button/BaseButton.vue";
import PincelSquareIcon from "@/components/icons/PincelSquareIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import ArchiveArrowDownIcon from "@/components/icons/ArchiveArrowDownIcon.vue";
import TagItem from "@/components/TagItem.vue";
import NoteDetailsSkeleton from "@/components/NoteDetailsSkeleton.vue";
import ModalWrapper from "@/components/ModalWrapper.vue";
import { useNoteStore } from "@/stores/note";
import { Note, newNullNote } from "@/domain/Note";

const emit = defineEmits(["close"]);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const noteDetails = ref<Note>();
const isNoteDetailsLoading = shallowRef<boolean>(false);

// const fetchNote = () => {
//   noteDetails.value = notes.find((note: Note) => note.id == props.id);
// };
const fetchDetails = async () => {
  try {
    isNoteDetailsLoading.value = true;
    console.log(props.id);
    noteDetails.value =
      (await useNoteStore().getNoteById(props.id)) ?? newNullNote();
  } catch (error) {
    console.log(error);
  } finally {
    isNoteDetailsLoading.value = false;
  }
};

onBeforeMount(() => {
  fetchDetails();
});
</script>
