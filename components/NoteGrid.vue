<template>
  <section data-test="notes-grid">
    <div v-if="isLoading" class="min-h-[90vh]">
      <div class="note-container gap-4 py-8">
        <NoteItemskeleton
          class="mb-6 rounded-lg"
          v-for="skeleton in 5"
          :key="skeleton"
        />
      </div>
    </div>
    <div v-else-if="notes.length">
      <div class="note-container gap-4 py-4 min-h-[30vh] max-h-max">
        <div v-for="(note, index) in notes" :key="index" class="figure">
          <NoteItem
            @click.stop="() => {}"
            class="overflow-hidden"
            :id="note.id"
            :title="note.title"
            :content="note.content"
            :creationDate="note.creationDate"
            :tags="note.tags"
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
      <p class="font-bold text-gray-800 dark:text-gray-300 text-xl text-center">
        It seem like there is no note please<br />
        click here for create one.
      </p>
    </div>
  </section>
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
import type { Note } from "@/domain/Note";
import type { PropType } from "vue";
import NoteItem from "@/components/NoteItem.vue";
import NoteItemskeleton from "@/components/skeleton/NoteItemskeleton.vue";

defineProps({
  notes: {
    type: Array as PropType<Note[]>,
    required: true,
  },
  isLoading: {
    type: Boolean,
  },
});
</script>
