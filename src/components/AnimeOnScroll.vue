<template>
  <div ref="block">
    <Transition>
      <div v-show="animation">
        <slot />
      </div>
    </Transition>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  transform: scale(1);
  animation: pulse-int 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.5);
  animation: pulse-out 1s;
}

@keyframes pulse-in {
  0% {
    transform: scale(0.9);
    transform: translateY(-30px);
  }
  100% {
    transform: scale(1);
    transform: translateY(0px);
  }
}
@keyframes pulse-out {
  0% {
    transform: scale(1);
    transform: translateY(0px);
  }
  100% {
    transform: scale(0.9);
    transform: translateY(-30px);
  }
}
</style>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const block = ref<Element | undefined>();
const animation = ref<boolean>(false);

const observer = new IntersectionObserver(
  ([entry]) => {
    !animation.value && (animation.value = entry.isIntersecting);
  },
  {
    threshold: 0.5,
  }
);

onMounted(() => block.value && observer.observe(block.value));
</script>
