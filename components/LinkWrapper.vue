<template>
  <a
    :href="path"
    :title="title"
    target="_blank"
    rel="noopener noreferrer"
    v-if="isExternal"
  >
    <slot />
  </a>
  <RouterLink :to="path" :title="title" :class="theme" v-else>
    <slot />
  </RouterLink>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
  },
  path: {
    type: String,
    required: true,
  },
  isExternal: {
    type: Boolean,
    default: false,
  },
});
</script>
