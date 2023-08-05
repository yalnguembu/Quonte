<template>
  <div id="note-list" class="dark:bg-gray-900">
    <NoteDetails
      v-if="noteToShowDetailsId"
      @close="
        () => {
          router.push({ name: 'notes' });
        }
      "
      :id="noteToShowDetailsId"
    />
    <NoteCreationModal
      data-test="note-creation-modal"
      v-if="istNoteCreationMoalVisible"
      @close="toggleIstNoteCreationMoalVisible"
      @created="goToNoteDetails"
    />
    <header class="w-full">
      <div>
        <h1
          class="font-bold text-3xl text-left dark:text-gray-200 px-4 py-4 lg:mb-0 lg:hidden"
        >
          My notes
        </h1>
        <hr class="w-full b-gray-700 shadow mb-4 lg:hidden" />
      </div>
      <TheHeader
        class="p-4"
        data-test="list-header"
        title="Notes"
        @changeView="changeView"
      />
    </header>
    <div class="min-h-screen flex justify-center bg-white dark:bg-gray-900">
      <div class="w-full max-w-screen-xl p-4 h-full block xl:px-12">
        <div v-if="istNotesListLoading" class="min-h-[90vh]">
          <div class="note-container gap-4 py-8">
            <NoteItemskeleton
              class="mb-6 rounded-lg"
              v-for="skeleton in 5"
              :key="skeleton"
            />
          </div>
        </div>
        <div v-else-if="notesList.length">
          <div class="note-container gap-4 py-4">
            <div v-for="(note, index) in notesList" :key="index" class="figure">
              <NoteItem
                @click.stop="() => {}"
                class="overflow-hidden"
                :id="note.id"
                :title="note.title"
                :content="note.content"
                :creationDate="note.creationDate"
                :tags="note.tags"
                :noteItemType="pageView"
              />
            </div>
          </div>
        </div>
        <div
          data-test="empty-notes-list"
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
            It seem like there is no note please<br />
            click here for create one.
          </p>
        </div>
        <CreationButton
          data-test="open-note-creation-nodal"
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
import { onBeforeMount, ref, watch } from "vue";
import NoteItem from "@/components/NoteItem.vue";
import NoteDetails from "./NoteDetails.vue";
import { useRoute, useRouter } from "vue-router";
import NoteItemskeleton from "@/components/NoteItemskeleton.vue";
import CreationButton from "@/components/button/CreationButton.vue";
import NoteCreationModal from "./NoteCreationModal.vue";
import { useNoteStore } from "@/stores/note";
import type { Note } from "@/domain/Note";
import { useSessionStore } from "@/stores/session";
import { NOTE_ITEM } from "@/utils/enum";
import TheHeader from "@/components/TheHeader.vue";

const router = useRouter();
const route = useRoute();
const user = useSessionStore().session;

const noteToShowDetailsId = ref<string | undefined>();
watch(
  route,
  (value) => (noteToShowDetailsId.value = (value.params.id as string) ?? "")
);

const pageView = ref<NOTE_ITEM>(NOTE_ITEM.CARD);
const changeView = (view: NOTE_ITEM): void => {
  pageView.value = view;
};
const notesList = ref<Note[]>([]);
const istNotesListLoading = ref<boolean>(false);
const istNoteCreationMoalVisible = ref<boolean>(false);

const fetchNotes = async () => {
  try {
    istNotesListLoading.value = true;
    notesList.value = (await useNoteStore().getNotesByUserId(user.id)).slice(
      0,
      4
    );
  } catch (error) {
    console.log(error);
  } finally {
    istNotesListLoading.value = false;
  }
};

onBeforeMount(async () => {
  await fetchNotes();
});

const toggleIstNoteCreationMoalVisible = () => {
  istNoteCreationMoalVisible.value = !istNoteCreationMoalVisible.value;
};

const goToNoteDetails = async (id: string) => {
  toggleIstNoteCreationMoalVisible();
  await router.push(`/notes/${id}`);
};
</script>
