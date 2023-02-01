<template>
  <div class="overflow-y-auto max-w-screen-xl mx-auto">
    <h1 class="text-xl font-bold">Labels</h1>
    <section class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3 xl:grid-cols-4">
      <LabelItem title="Analyse" />
      <LabelItem title="Conception" />
      <LabelItem title="Modelisation" />
      <LabelItem title="Developpement" />
      <LabelItem title="Tests" />
      <LabelItem title="Deployement" />
      <LabelItem title="Maintening" />
    </section>
  </div>
</template>
<script setup lang="ts">
import LabelItem from "./LabelItem.vue";
</script>
