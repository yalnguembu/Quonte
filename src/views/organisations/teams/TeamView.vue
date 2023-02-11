<template>
  <div class="p-4 lg:p-8 bg-gray-100 min-h-full">
    <header class="flex flex-row justify-between">
      <div>
        <button
          class="p-2 border border-dashed border-gray-400 rounded-md text-gray-500 ml-4 hover:bg-gray-200"
        >
          <span class="">
            <PlusIcon class="mr-2" />
          </span>
          <span>add user</span>
        </button>
      </div>
      <div>
        <SearchInput
          v-model.trim="search"
          placeholder="Filter by username"
          class="inline mr-4 py-3"
        />
      </div>
    </header>
    <section class="mt-8">
      <table class="w-full">
        <tbody>
          <tr
            class="border-b hover:bg-white cursor-pointer"
            v-for="item in 5"
            :key="item"
          >
            <td class="p-4 py-6 w-12">
              <UserAvatar name="mazeking" path="@/assets/images/me.png" />
            </td>
            <td class="p-4 py-6 text-bold text-lg">Mazeking</td>
            <td class="p-4 py-6 text-gray-500">mazeking@lao-sarl.cm</td>
            <td class="p-4 py-6 w-36">
              <span class="bg-gray-300 p-1 px-2 rounded text-gray-500">
                super admin
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script setup lang="ts">
import PlusIcon from "@/components/icons/PlusIcon.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import SearchInput from "@/components/form/SearchInput.vue";
import { ref } from "@vue/reactivity";
const search = ref<string>("");
</script>
