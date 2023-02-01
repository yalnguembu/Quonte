<template>
  <img
    :src="props.path"
    :alt="props.name.substr(0,1)"
    class="rounded-full bg-gray-500 object-cover h-9 w-9"
  />
</template>
<script setup lang="ts">
interface Props {
  name: any;
  path?: string;
}
const props = defineProps<Props>();
</script>
