<template>
  <RouterLink
    :to="`/app/notes/${id}`"
    class="'bg-white w-full hover:shadow-lg rounded-lg border dark:border-gray-700 hover:bg-gray-100/50 dark:bg-gray-900/50 dark:hover:bg-gray-800 flex flex-col justify-between',"
  >
    <div
      :class="[
        'p-4 flex-col justify-center overflow-hidden flex flex-col',
        { 'border-b dark:border-b-gray-700': noteItemType === NOTE_ITEM.CARD },
        {
          'max-h-40':
            noteItemType === NOTE_ITEM.CARD ||
            noteItemType === NOTE_ITEM.SUMMARY,
        },
      ]"
    >
      <div class="w-full truncate max-h-24">
        <h4
          class="font-bold dark:text-gray-100 text-lg mt-2 w-full text-ellipsis whitespace-pre-all overflow-hidden break-word"
        >
          {{ title }}
        </h4>
      </div>
      <div
        class="flex flex-row flex-wrap mt-2 max-h-20 overflow-y-hidden"
        v-if="
          noteItemType === NOTE_ITEM.CARD || noteItemType === NOTE_ITEM.SUMMARY
        "
      >
        <RouterLink
          v-for="tagItem in tags"
          :key="tagItem.id"
          :to="tagItem.id"
          class="max-w-full"
        >
          <TagItem :title="tagItem.title" />
        </RouterLink>
      </div>
    </div>
    <div v-if="noteItemType === NOTE_ITEM.CARD">
      <div class="p-4 mb-3 max-h-40 w-full overflow-hidden" v-if="description">
        <p
          class="font-sm dark:text-gray-300 text-gray-500 whitespace-pre-all break-word text-ellipsis"
        >
          {{ description }}
        </p>
      </div>
      <p class="font-sm text-gray-400 dark:text-gray-500 p-4">
        {{ date().getPassedTime(creationDate) }}
      </p>
    </div>
  </RouterLink>
</template>
<script lang="ts" setup>
import { date } from "@/utils/common";
import type { Tag } from "@/utils/type";
import { NOTE_ITEM } from "@/utils/enum";
import TagItem from "./TagItem.vue";

defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creationDate: {
    type: String,
    required: true,
  },
  noteItemType: {
    type: String,
    default: NOTE_ITEM.CARD,
  },
  tags: {
    type: Array<Tag>,
  },
});
</script>
