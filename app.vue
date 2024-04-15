<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '~/static/logo.png' },
    { rel: 'icon', type: 'image/x-icon', href: '~/static/logo.png' }
  ],
}
)
</script>