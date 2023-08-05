<template>
  <div class="w-full flex justify-between">
    <div class="flex w-3/4">
      <SearchInput
        v-model="filterCriteria.text"
        placeholder="Search in notes..."
        class="w-full"
        resizable
      />
    </div>
    <div class="grid grid-cols-2">
      <FilterButtonVue />
      <SortButton :sort="filterCriteria.startDate" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import type { FilterCriteria } from "@/utils/type";
import SearchInput from "@/components/form/SearchInput.vue";
import FilterButtonVue from "@/components/button/FilterButton.vue";
import SortButton from "@/components/button/SortButton.vue";

const filterCriteria = reactive<FilterCriteria>({
  text: "",
  startDate: "",
  endDate: "",
});
</script>
