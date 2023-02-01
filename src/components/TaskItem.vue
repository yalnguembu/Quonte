<template>
  <div
    class="w-full bg-white mb-4 p-3 rounded-lg border-l-4 border-blue-500 bg-gray-100"
  >
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-lg font-bold">Login web design</h1>
      <button>
        <EllipsisVerticalIcon />
      </button>
    </div>
    <p class="text-gray-500 mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      explicabo
    </p>
    <div class="w-full bg-gray-100 rounded-xl mt-3">
      <div class="w-1/2 bg-yellow-200 block rounded-xl p-0"></div>
    </div>
    <div class="text-gray-500 mt-4">
      <p class="text-gray-500 flex flex-row justify-between">
        <span>
          <UserIcon class="align-middle" />
          <span class="ml-2 align-middle">Team FD1</span></span
        >
        <span
          ><span> 3</span>
          <SquareStackIcon class="align-middle ml-2" />
        </span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import UserIcon from "./icons/UserIcon.vue";
import EllipsisVerticalIcon from "./icons/EllipsisVerticalIcon.vue";
import SquareStackIcon from "./icons//SquareStackIcon.vue";
</script>
