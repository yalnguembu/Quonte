<template>
  <div class="relative">
    <button class="p-2 rounded hover:bg-gray-100 border-2">
      <BarsBottomLeftIcon @click="toggleMenuVisibility" class="text-gray-500" />
    </button>
    <div
      v-if="isMenuvisible"
      class="rounded bg-white absolute top-12 w-52 text-gray-500 shadow-lg"
    >
      <ul>
        <li>
          <RouterLink to="" class="block p-2 hover:bg-gray-100">
            <PlusIcon class="mr-2 align-middle" /> New organisation
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/organisations" class="block p-2 hover:bg-gray-100">
            <CircleStackIcon class="mr-2 align-middle" /> Organisations
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/setting" class="block p-2 hover:bg-gray-100">
            <SettingIcon class="mr-2 align-middle" /> Setting
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import PlusIcon from "../icons/PlusIcon.vue";
import CircleStackIcon from "../icons/CircleStackIcon.vue";
import SettingIcon from "../icons/SettingIcon.vue";
import BarsBottomLeftIcon from "../icons/BarsBottomLeftIcon.vue";
import { ref } from "vue";
const isMenuvisible = ref(false);
const toggleMenuVisibility = () => (isMenuvisible.value = !isMenuvisible.value);
</script>
