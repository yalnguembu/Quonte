<template>
  <RouterView v-slot="{ Component, route }">
    <transition name="slide-fade">
      <component :is="Component" :key="route.name" />
    </transition>
  </RouterView>
</template>
<style>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(-30%);
}

.slide-fade-leave-to {
  transform: translateX(30%);
}
</style>
