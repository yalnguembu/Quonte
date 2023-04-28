<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center">
    <div class="w-full max-w-screen-xl p-4 h-full block xl:px-12">
      <div
        class="grid grid-cols-1 gap-x-4 lg:gap-x-8 lg:grid-cols-10 items-center mt-4"
      >
        <div class="col-span-5">
          <h1 class="font-bold text-3xl text-left dark:text-gray-200">
            Saved notes
          </h1>
        </div>
        <div class="flex justify-center col-span-3">
          <SearchInput
            v-model="state.search"
            placeholder="Search in notes..."
            class="w-full"
          />
        </div>
        <div class="flex justify-between">
          <ViewButton @change="changleListView" :view="listView" />
          <div class="ml-2">
            <FilterButtonVue />
          </div>
        </div>
      </div>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NoteItem
          v-for="(note, index) in notes"
          :key="index"
          :id="note.id"
          :title="note.title"
          :description="note.description"
          :creationDate="note.creationDate"
          :tags="note.tags"
          :noteItemType="listView"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from "vue";
import SearchInput from "@/components/form/SearchInput.vue";
import FilterButtonVue from "@/components/FilterButton.vue";
import ViewButton from "@/components/ViewButton.vue";
import NoteItem from "@/components/NoteItem.vue";
import { notes } from "@/utils/data";
import { NOTE_ITEM } from "@/utils/enum";

const state = shallowRef({ search: "" });

const listView = ref<NOTE_ITEM>(NOTE_ITEM.CARD);

const changleListView = (view: NOTE_ITEM): void => {
  listView.value = view;
};
</script>
