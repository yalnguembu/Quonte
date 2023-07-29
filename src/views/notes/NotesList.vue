<template>
  <div id="note-list">
    <NoteDetails
      v-if="id"
      @close="
        () => {
          router.push({ name: 'notes' });
        }
      "
      :id="id"
    />
    <NoteCreationModal
      v-if="istNoteCreationMoalVisible"
      @close="toggleIstNoteCreationMoalVisible"
    />
    <header class="w-full mb-4">
      <h1
        class="font-bold text-3xl text-left dark:text-gray-200 px-4 py-4 lg:mb-0 lg:hidden"
      >
        My notes
      </h1>
      <hr class="w-full b-gray-700 shadow mb-4" />
    </header>
    <div class="min-h-screen flex justify-center bg-white dark:bg-gray-900">
      <div class="w-full max-w-screen-xl p-4 h-full block xl:px-12">
        <div v-if="istNotesListLoading" class="min-h-[90vh]">
          <div class="flex justify-between animate-pulse my-4">
            <div class="h-7 rounded-lg w-80 bg-gray-100 dark:bg-gray-700" />
            <div class="h-7 rounded-lg w-96 bg-gray-100 dark:bg-gray-700" />
            <div class="flex">
              <div
                class="h-7 rounded-lg w-12 ml-4 bg-gray-100 dark:bg-gray-700"
              />
              <div
                class="h-7 rounded-lg w-12 ml-4 bg-gray-100 dark:bg-gray-700"
              />
              <div
                class="h-7 rounded-lg w-12 ml-4 bg-gray-100 dark:bg-gray-700"
              />
            </div>
          </div>
          <div class="note-container gap-4 py-8">
            <NoteItemskeleton
              class="mb-6 rounded-lg"
              v-for="skeleton in 5"
              :key="skeleton"
            />
          </div>
        </div>
        <div v-else-if="notesList.length">
          <div
            class="grid grid-cols-1 gap-x-4 lg:gap-x-8 lg:grid-cols-7 items-center mt-4"
          >
            <div class="col-span-3">
              <h1
                class="font-bold text-3xl text-left dark:text-gray-200 mb-4 hidden lg:block lg:mb-0"
              >
                Notes
              </h1>
            </div>
            <div class="flex justify-center col-span-3">
              <SearchInput
                v-model="state.search"
                placeholder="Search in notes..."
                class="w-full"
              />
            </div>
            <div class="grid grid-cols-3">
              <ViewButton @change="changleListView" :view="listView" />
              <FilterButtonVue />
              <SortButton :sort="dateSort" />
            </div>
          </div>
          <div class="note-container gap-4 py-12">
            <div v-for="(note, index) in notesList" :key="index" class="figure">
              <NoteItem
                @click.stop="() => {}"
                class="overflow-hidden"
                :id="note.id"
                :title="note.title"
                :content="note.content"
                :creationDate="note.creationDate"
                :tags="note.tags"
                :noteItemType="listView"
              />
            </div>
          </div>
        </div>
        <div
          v-else
          class="w-full min-h-[90vh] flex flex-col items-center justify-center p-12"
        >
          <img
            src="@/assets/images/notes.svg"
            alt="notes"
            class="w-1/2 lg:w-1/3 mb-12 grayscale"
          />
          <p
            class="font-bold text-gray-800 dark:text-gray-300 text-xl text-center"
          >
            It seem like there is no note please <br />
            click here for create one
          </p>
        </div>
        <NoteCreationButton
          @click.stop="toggleIstNoteCreationMoalVisible"
          v-if="!istNotesListLoading"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 20px;
  break-inside: avoid;
}

.note-container {
  column-count: 1;
}

@media screen and (min-width: 700px) {
  .note-container {
    column-count: 3;
  }
}
</style>
<script setup lang="ts">
import { onBeforeMount, ref, shallowRef, watch } from "vue";
import { NOTE_ITEM, SORT_TYPE } from "@/utils/enum";
import SearchInput from "@/components/form/SearchInput.vue";
import FilterButtonVue from "@/components/button/FilterButton.vue";
import ViewButton from "@/components/button/ViewButton.vue";
import NoteItem from "@/components/NoteItem.vue";
import SortButton from "@/components/button/SortButton.vue";
import NoteDetails from "./NoteDetails.vue";
import { useRoute, useRouter } from "vue-router";
import NoteItemskeleton from "@/components/NoteItemskeleton.vue";
import NoteCreationButton from "@/components/button/NoteCreationButton.vue";
import NoteCreationModal from "./NoteCreationModal.vue.vue";
import { useNoteStore } from "@/stores/note";
import type { Note } from "@/domain/Note";

const noteStore = useNoteStore();
const router = useRouter();
const route = useRoute();
const id = ref<string | undefined>();
watch(route, (value) => (id.value = (value.params.id as string) ?? ""));

const notesList = ref<Note[]>([]);
const state = shallowRef({ search: "" });
const listView = ref<NOTE_ITEM>(NOTE_ITEM.CARD);
const dateSort = ref<SORT_TYPE>(SORT_TYPE.DESC);
const istNotesListLoading = ref<boolean>(false);
const istNoteCreationMoalVisible = ref<boolean>(false);

const changleListView = (view: NOTE_ITEM): void => {
  listView.value = view;
};

const fetchNotes = async () => {
  try {
    istNotesListLoading.value = true;
    notesList.value = await noteStore.getAllNotes();
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => (istNotesListLoading.value = false), 500);
  }
};
onBeforeMount(async () => {
  await fetchNotes();
});

const toggleIstNoteCreationMoalVisible = () => {
  istNoteCreationMoalVisible.value = !istNoteCreationMoalVisible.value;
};
</script>
