<template>
  <div class="overflow-y-auto">
    <section class="grid grid-cols-1 gap-10 lg:grid-cols-4 text-gray-700">
      <div class="p-6 rounded-lg font-bold shadow-lg border border-gray-100">
        <h1 class="text-3xl mb-4 mt-2">
          <ClipboardIcon class="w-12 h-12 text-emerald-700 align-middle" />
          <span class="align-middle ml-2"> 31</span>
        </h1>
        <p class="ml-1 text-gray-500">All tasks</p>
      </div>
      <div class="p-6 rounded-lg font-bold shadow-lg border border-gray-100">
        <h1 class="text-3xl mb-4 mt-2">
          <ClipboardCopieIcon class="w-12 h-12 text-emerald-700 align-middle" />
          <span class="align-middle ml-2">19</span>
        </h1>
        <p class="ml-1 text-gray-500">Todo tasks</p>
      </div>
      <div class="p-6 rounded-lg font-bold shadow-lg border border-gray-100">
        <h1 class="text-3xl mb-4 mt-2">
          <ArrowPathIcon class="w-12 h-12 text-emerald-700 align-middle" />
          <span class="align-middle ml-2">6</span>
        </h1>
        <p class="ml-1 text-gray-500">Ongoing tasks</p>
      </div>
      <div class="p-6 rounded-lg font-bold shadow-lg border border-gray-100">
        <h1 class="text-3xl mb-4 mt-2">
          <CheckCircleIcon class="w-12 h-12 text-emerald-700 align-middle" />
          <span class="align-middle ml-2">5</span>
        </h1>
        <p class="ml-1 text-gray-500">Done tasks</p>
      </div>
    </section>
    <div class="w-full grid grid-cols-1 mt-8 lg:gap-x-8 lg:grid-cols-3">
      <section class="col-span-2">
        <h1 class="text-lg">Taks evolutions</h1>
        <div
          class="w-full border h-4/5 mt-4 rounded flex flex-row items-center justify-center h-96"
        >
          <p>Bar chart will be here</p>
        </div>
      </section>
      <aside>
        <h1 class="font-500 text-lg">Members</h1>
        <ProjectGroup />
        <RouterLink
          :to="{ name: 'tabMembers' }"
          class="block text-center text-gray-500 mt-2"
        >
          View all members
        </RouterLink>
      </aside>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProjectGroup from "./ProjectGroup.vue";
import ListIcon from "./icons/ListIcon.vue";
import CheckCircleIcon from "./icons/CheckCircleIcon.vue";
import ClipboardIcon from "./icons/ClipboardIcon.vue";
import ArrowPathIcon from "./icons/ArrowPathIcon.vue";
import ClipboardCopieIcon from "./icons/ClipboardCopieIcon.vue";
</script>
