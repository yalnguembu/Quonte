<template>
  <div class="rounded bg-white absolute top-12 w-52 text-gray-500 shadow-lg">
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
</template>
<script setup lang="ts">
import PlusIcon from "../icons/PlusIcon.vue";
import CircleStackIcon from "../icons/CircleStackIcon.vue";
import SettingIcon from "../icons/SettingIcon.vue";
</script>
