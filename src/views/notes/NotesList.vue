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
      v-if="istNoteCreationModalVisible"
      @close="toggleIstNoteCreationModalVisible"
      @created="goToNoteDetails"
    />
    <header class="w-full">
      <TheHeader data-test="list-header" title="Notes" @search="search" />
    </header>
    <div
      class="min-h-screen flex justify-center bg-white dark:bg-gray-900 h-full overflow-y-auto"
    >
      <div class="w-full max-w-screen-xl p-4 h-full block xl:px-12">
        <NoteGrid :is-loading="istNotesListLoading" :notes="notesList" />
        <CreationButton
          data-test="open-note-creation-nodal"
          @click.stop="toggleIstNoteCreationModalVisible"
          v-if="!istNotesListLoading"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import NoteDetails from "./NoteDetails.vue";
import { useRoute, useRouter } from "vue-router";
import CreationButton from "@/components/button/CreationButton.vue";
import NoteCreationModal from "./NoteCreation.vue";
import { useNoteStore } from "@/stores/note";
import type { Note } from "@/domain/Note";
import { useSessionStore } from "@/stores/session";
import TheHeader from "@/components/TheHeader.vue";
import NoteGrid from "@/components/NoteGrid.vue";
import { toLowerCase } from "@/utils/string";

const router = useRouter();
const route = useRoute();
const user = useSessionStore().session;

const noteToShowDetailsId = ref<string | undefined>();
watch(
  route,
  (value) => (noteToShowDetailsId.value = (value.params.id as string) ?? "")
);
const fetchedNotes = ref<Note[]>([]);
const notesList = ref<Note[]>([]);
const istNotesListLoading = ref<boolean>(false);
const istNoteCreationModalVisible = ref<boolean>(false);

const fetchNotes = async () => {
  try {
    istNotesListLoading.value = true;
    fetchedNotes.value = await useNoteStore().getNotesByUserId(user.id);
    notesList.value = fetchedNotes.value;
  } catch (error) {
    console.log(error);
  } finally {
    istNotesListLoading.value = false;
  }
};

onBeforeMount(async () => {
  await fetchNotes();
});

const toggleIstNoteCreationModalVisible = () => {
  istNoteCreationModalVisible.value = !istNoteCreationModalVisible.value;
};

const goToNoteDetails = async (id: string) => {
  toggleIstNoteCreationModalVisible();
  await router.push(`/notes/${id}`);
};

const search = (query: string): void => {
  query = toLowerCase(query);
  notesList.value = fetchedNotes.value.filter((note) =>
    toLowerCase(note.title).search(query) === -1 ? false : true
  );
};
</script>
