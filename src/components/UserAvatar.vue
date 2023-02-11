<template>
  <img
    :src="props.path"
    :alt="props.name[0]"
    class="rounded-full bg-gray-500 object-cover h-9 w-9"
  />
</template>
<script setup lang="ts">
interface Props {
  name: string;
  path?: string;
}
const props = defineProps<Props>();
</script>
