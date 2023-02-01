<template>
  <table class="table-auto w-full border rounded-md">
    <thead class="bg-gray-100 text-left text-lg">
      <tr>
        <th class="p-4 w-1/12">#</th>
        <th class="p-4 w-6/12">Name</th>
        <th class="p-4 w-3/12">Role</th>
        <th class="p-4 w-2/12">Action</th>
      </tr>
    </thead>
    <tbody class="text-gray-600 text-lg">
      <tr class="border-b">
        <td class="p-4">
          <UserAvatar class="inline" name="Yal nguembu" :path="Image" />
        </td>
        <td class="p-4">Eleven mazekin Gumball</td>
        <td class="p-4">
          <span> Scrum master</span>
          <button><ChevronDownIcon class="w-4 h-4 align-middle ml-1" /></button></td>
        <td class="p-4">
          <button class="p-2 rounded hover:bg-gray-200"><RemoveUser /></button>
        </td>
      </tr>
      <tr class="border-b">
        <td class="p-4">
          <UserAvatar class="inline" name="Yal nguembu" :path="Image" />
        </td>
        <td class="p-4">Mazeking</td>
        <td class="p-4">
          <span> Scrum master</span>
          <button><ChevronDownIcon class="w-4 h-4 align-middle ml-1" /></button>
        </td>
        <td class="p-4">
          <button class="p-2 rounded hover:bg-gray-200"><RemoveUser /></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import Image from "@/assets/images/me.png";
import UserAvatar from "./UserAvatar.vue";
import RemoveUser from "./icons/RemoveUser.vue";
import ChevronDownIcon from "./icons/ChevronDownIcon.vue";
</script>
