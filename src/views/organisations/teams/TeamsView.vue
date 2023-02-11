<template>
  <div class="p-4 lg:p-8 bg-gray-100 min-h-full">
    <header class="flex flex-row justify-between">
      <button class="text-gray-500">
        <span class="p-2 h-3 border border-dashed rounded mr-2">
          <PlusIcon />
        </span>
        <span>new team</span>
      </button>
      <div>
        <SearchInput
          v-model.trim="search"
          placeholder="Filter by username"
          class="inline mr-4"
        />
      </div>
    </header>
    <section class="mt-12">
      <table class="w-full">
        <tbody>
          <tr
            class="w-full border-b hover:bg-white cursor-pointer"
            v-for="item in 3"
            :key="item"
          >
            <RouterLink
              :to="{ name: 'team', params: { teamId: `Team-fe-${item}` } }"
            >
              <td class="p-4 py-6 w-12">
                <UserAvatar name="mazeking" path="@/assets/images/me.png" />
              </td>
              <td class="p-4 py-6 text-bold text-lg">Mazeking</td>
            </RouterLink>
            <td class="p-4 py-6 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <button class="text-emerald-700">
                <TrashIcon class="w-[18px] h-[18px] align-middle" />
              </button>
              <button class="text-emerald-700 ml-3">
                <PencilIcon class="w-[18px] h-[18px] align-middle" />
              </button>
              <button
                class="p-1 px-2 rounded border-gray-300 border text-gray-700 ml-3"
              >
                <UserGroupIcon />
                <span class="ml-2">Manage</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script setup lang="ts">
import UserGroupIcon from "@/components/icons/UserGroupIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import PencilIcon from "@/components/icons/PencilIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import SearchInput from "@/components/form/SearchInput.vue";
import { ref } from "@vue/reactivity";
const search = ref<string>("");
</script>
