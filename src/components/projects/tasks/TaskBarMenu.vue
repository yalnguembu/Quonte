<template>
  <div class="px-6">
    <div class="flex flex-row items-center justify-between py-4">
      <div>
        <h1 class="font-bold">Tasks</h1>
      </div>
      <div class="">
        <!-- <SerachBar /> -->
        <SearchInput
          v-model.trim="search"
          @input="emit('search', $event.target.value)"
          placeholder="Filter by title"
          class="inline mr-4"
        />
        <BaseButton
          @click="toggleFormModalVisibility"
          class="inline"
          title="New task"
        />
      </div>
    </div>
    <hr class="border" />
    <TaskCreationForm
      v-if="isCreationFormVisible"
      @close="toggleFormModalVisibility"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../../BaseButton.vue";
import SearchInput from "../../form/SearchInput.vue";
import TaskCreationForm from "./TaskCreationForm.vue";

const search = ref("");
const emit = defineEmits(["search"]);

const isCreationFormVisible = ref(false);
const toggleFormModalVisibility = () =>
  (isCreationFormVisible.value = !isCreationFormVisible.value);
</script>
