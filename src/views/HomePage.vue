<template>
  <div
    class="w-full flex flex-col items-center min-h-screen bg-white dark:bg-gray-900"
  >
    <header class="w-full lg:hidden">
      <h1
        class="text-4xl px-4 font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500 py-4"
      >
        Quonte
      </h1>
      <hr class="w-full dark:border-gray-700 shadow mb-4" />
    </header>
    <main class="w-full p-4 max-w-screen-xl">
      <section
        class="w-full h-[11rem] shadow-lg bg-gray-100 dark:bg-gray-800/50 rounded relative overflow-hidden border dark:border-gray-800/10 mb-6 md:h-[9rem] lg:h-[8rem] xl:lg:h-[7rem]"
      >
        <img
          src="@/assets/images/home-section-bg-final.png"
          class="h-full w-full object-cover opacity-50"
          alt=""
        />
        <div
          class="absolute w-full h-full p-4 top-0 left-0 flex flex-col justify-between md:items-center md:flex-row"
        >
          <div>
            <h2 class="text-4xl font-bold text-green-800 dark:text-green-200">
              Hello {{ useSessionStore().session?.username }}!
            </h2>
            <h4
              class="text-sm text-gray-700 dark:text-gray-400 dark:text-gray-100 md:text-base"
            >
              Welcome back, nice to seen you again
            </h4>
          </div>
          <BaseButton
            theme="py-1 px-3 text-white text-base dark:text-green-900 bg-green-800 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
            title="New note"
            data-test="note-creation-button"
            @click="toggleIstNoteCreationMoalVisible"
          >
            <template #icon-left>
              <PlusIcon class="middle mr-2" />
            </template>
          </BaseButton>
        </div>
      </section>
      <section class="mt-6" data-test="tags-section">
        <div>
          <h2 class="text-3xl font-bold dark:text-gray-100">Tags</h2>
          <h4
            class="text-base text-gray-700 dark:text-gray-400 dark:text-gray-100 mt-2"
          >
            See your most frequently used tags
          </h4>
        </div>
        <template v-if="isTagsListLoading">
          <TagItemskeleton v-for="index in [4]" :key="index" />
        </template>
        <template v-else-if="tagsList.length">
          <div class="flex w-full flex-wrap mt-2">
            <RouterLink
              v-for="tagItem in tagsList"
              :key="tagItem.id"
              :to="`/tags/${tagItem.id}`"
              class="max-w-full"
            >
              <TagItem :title="tagItem.title" :id="tagItem.id" />
            </RouterLink>
          </div>
        </template>
        <div data-test="empty-tags" v-else>
          <h3 class="dark:text-gray-600">
            No tags yet created! Please crate tags
          </h3>
        </div>
      </section>
      <section class="mt-6" data-test="notes-section">
        <div>
          <h2 class="text-3xl font-bold dark:text-gray-100">Notes</h2>
          <h4
            class="text-base text-gray-700 dark:text-gray-400 dark:text-gray-100 mt-2"
          >
            Here is what you recently wrote
          </h4>
        </div>
        <div
          class="w-full overflow-x-scroll flex gap-6 pb-1 mt-4 scrollbar-hide md:flex-wrap lg:grid lg:grid-cols-2 lg:overflow-hidden"
        >
          <template v-if="isNotesListLoading">
            <NoteItemskeleton v-for="index in [4]" :key="index" />
          </template>
          <template v-else-if="notesList.length">
            <NoteItem
              class="shrink-0 w-[75vw] md:w-[46vw] lg:w-auto"
              @click.stop="() => {}"
              v-for="(note, index) in notesList"
              :key="index"
              :id="note.id"
              :title="note.title"
              :content="note.content"
              :creationDate="note.creationDate"
              :tags="note.tags"
              :noteItemType="NOTE_ITEM.CARD"
            />
          </template>
          <div data-test="empty-notes" v-else>
            <h3 class="dark:text-gray-600">
              No Note yet created! click up the for crate new note
            </h3>
          </div>
        </div>
      </section>
    </main>
    <NoteCreationModal
      v-if="istNoteCreationMoalVisible"
      @close="toggleIstNoteCreationMoalVisible"
    />
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import NoteItem from "@/components/NoteItem.vue";
import TagItem from "@/components/TagItem.vue";
import BaseButton from "@/components/button/BaseButton.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import NoteCreationModal from "./notes/NoteCreation.vue";
import NoteItemskeleton from "@/components/skeleton/NoteItemskeleton.vue";
import TagItemskeleton from "@/components/skeleton/TagItemskeleton.vue";
import type { Note } from "@/domain/Note";
import { useNoteStore } from "@/stores/note";
import { useSessionStore } from "@/stores/session";
import { NOTE_ITEM } from "@/utils/enum";
import type { Tag } from "@/domain/Tag";
import { useTagStore } from "@/stores/tag";

const notesList = ref<Note[]>([]);
const tagsList = ref<Tag[]>([]);
const user = useSessionStore().session;

const isNotesListLoading = ref<boolean>(false);
const isTagsListLoading = ref<boolean>(false);

const istNoteCreationMoalVisible = ref<boolean>(false);

const toggleIstNoteCreationMoalVisible = () => {
  istNoteCreationMoalVisible.value = !istNoteCreationMoalVisible.value;
};

const fetchNotes = async () => {
  try {
    isNotesListLoading.value = true;
    notesList.value = (await useNoteStore().getNotesByUserId(user.id)).slice(
      0,
      4
    );
  } catch (error) {
    console.log(error);
  } finally {
    isNotesListLoading.value = false;
  }
};

const fetchTags = async () => {
  try {
    isTagsListLoading.value = true;
    tagsList.value = (await useTagStore().getTagsByUserId(user.id)).slice(0, 5);
  } catch (error) {
    console.log(error);
  } finally {
    isTagsListLoading.value = false;
  }
};

onBeforeMount(() => {
  fetchNotes();
  fetchTags();
});
</script>
