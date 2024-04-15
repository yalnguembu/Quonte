<template>
  <div class="relative">
    <button
      @click.stop="toggleIsActionMenuVisible"
      class="outline-2 outline-green-700 rounded flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <GridIcon
        v-if="view === NOTE_ITEM.CARD"
        class="inline dark:stroke-gray-100"
      />
      <SummaryIcon
        v-if="view === NOTE_ITEM.SUMMARY"
        class="inline dark:stroke-gray-100"
      />
      <ListIcon
        v-if="view === NOTE_ITEM.LIST"
        class="inline dark:stroke-gray-100"
      />
    </button>
    <ActionMenuWrapper
      v-if="isActionMenuVisible"
      @close="toggleIsActionMenuVisible"
    >
      <span class="block p-2 mb-2 text-bold border-b dark:border-b-gray-900"
        >View</span
      >
      <ActionMenuitem
        v-for="(menu, index) in menus"
        :key="index"
        :label="menu.label"
        :icon="menu.icon"
        @click="handelClick(menu.type)"
      />
    </ActionMenuWrapper>
  </div>
</template>
<script lang="ts" setup>
import { markRaw, shallowRef } from "vue";
import { NOTE_ITEM } from "@/utils/enum";
import GridIcon from "../icons/SquaresIcon.vue";
import ListIcon from "../icons/ListIcon.vue";
import SummaryIcon from "../icons/SummaryIcon.vue";
import ActionMenuWrapper from "../menu/ActionMenuWrapper.vue";
import ActionMenuitem from "../menu/ActionMenuitem.vue";

const emit = defineEmits(["change"]);

defineProps({
  view: {
    type: String,
    required: true,
  },
});
const menus = [
  {
    label: "Card",
    type: NOTE_ITEM.CARD,
    icon: markRaw(GridIcon),
  },
  {
    label: "Summary",
    type: NOTE_ITEM.SUMMARY,
    icon: markRaw(SummaryIcon),
  },
  {
    label: "List",
    type: NOTE_ITEM.LIST,
    icon: markRaw(ListIcon),
  },
];
const handelClick = (itemType: NOTE_ITEM) => {
  emit("change", itemType);
  toggleIsActionMenuVisible();
};

const isActionMenuVisible = shallowRef<boolean>(false);

const toggleIsActionMenuVisible = () =>
  (isActionMenuVisible.value = !isActionMenuVisible.value);
</script>
