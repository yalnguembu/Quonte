<template>
  <div class="overflow-y-auto">
    <section class="grid grid-cols-3 gap-6">
      <div class="border-r rounded p-4">
        <h1 class="text-xl font-bold">Todo</h1>
        <div class="mt-4">
          <TaskItem v-for="task in 3" :key="task" />
        </div>
      </div>
      <div class="border-r rounded p-4">
        <h1 class="text-xl font-bold">In progress</h1>
        <div class="mt-4">
          <TaskItem v-for="task in 2" :key="task" />
        </div>
      </div>
      <div class="rounded p-4">
        <h1 class="text-xl font-bold">Done</h1>
        <div class="mt-4">
          <TaskItem />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import LabelItem from "./LabelItem.vue";
import TaskItem from "./TaskItem.vue";
</script>
