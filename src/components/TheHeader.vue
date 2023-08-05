<template>
  <section class="w-full">
    <div
      class="w-full grid grid-cols-1 gap-x-4 lg:gap-x-8 lg:grid-cols-9 items-center border-b dark:border-b-gray-700"
    >
      <div class="col-span-4">
        <h1
          class="font-bold text-3xl text-left dark:text-gray-200 mb-4 hidden lg:block lg:mb-0"
        >
          {{ title }}
        </h1>
      </div>
      <ListFilter class="col-span-4" />
      <ViewButton @change="changleView" :view="pageView" />
      <div class="col-span-8 p-2" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ListFilter from "@/components/ListFilter.vue";
import ViewButton from "@/components/button/ViewButton.vue";

import { NOTE_ITEM } from "@/utils/enum";

const emits = defineEmits<{
  (event: "changeView", view: NOTE_ITEM): void;
}>();

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const pageView = ref<NOTE_ITEM>(NOTE_ITEM.CARD);
const changleView = (view: NOTE_ITEM): void => {
  emits("changeView", view);
};
</script>
