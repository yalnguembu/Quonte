<template>
  <RouterLink
    :to="id"
    :class="[
      'bg-white w-full rounded-lg border dark:border-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 flex flex-col justify-between',
    ]"
  >
    <div
      :class="[
        'p-4 flex-col justify-center overflow-hidden flex flex-col',
        { 'border-b dark:border-b-gray-700': noteItemType === NOTE_ITEM.CARD },
        {
          'h-40':
            noteItemType === NOTE_ITEM.CARD || noteItemType === NOTE_ITEM.SUMMARY,
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
        <TagItem
          v-for="tagItem in tags"
          :key="tagItem.id"
          :id="tagItem.id"
          :title="tagItem.title"
        />
      </div>
    </div>
    <div v-if="noteItemType === NOTE_ITEM.CARD">
      <div class="p-4 max-h-40 w-full overflow-hidden">
        <p
          class="font-sm text-gray-300 whitespace-pre-all break-word text-ellipsis"
        >
          {{ description }}
        </p>
      </div>
      <p class="font-sm text-gray-500 p-4 mt-3">
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
