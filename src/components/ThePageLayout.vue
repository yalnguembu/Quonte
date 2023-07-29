<template>
  <div class="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
    <main
      :class="[
        'overflow-y-auto',
        asideVisibility ? ' col-span-2' : ' col-span-3',
      ]"
    >
      <slot
        name="main"
        @openAsideCard="toggleAsideVisibility"
        @closeAsideCard="toggleAsideVisibility"
      />
    </main>
    <aside
      v-if="asideVisibility"
      class="h-full col-span-1 p-4 border-l dark:border-l-gray-700"
    >
      <Transition>
        <slot name="aside" />
      </Transition>
    </aside>
  </div>
</template>
<script lang="ts" setup>
import { shallowRef } from "vue";

const asideVisibility = shallowRef<boolean>(false);

const toggleAsideVisibility = () =>
  (asideVisibility.value = !asideVisibility.value);
</script>
