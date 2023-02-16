import { onMounted, onBeforeUnmount, type Ref } from "vue";
// in a setup function
export const useOnClickOutSide = (
  component: Ref<HTMLElement | undefined>,
  callback: () => any
) => {
  function eventListener(event: Event) {
    if (component) {
      if (
        component.value !== event.target &&
        event.composedPath().includes(component.value as HTMLElement)
      ) {
        return;
      }
      callback();
    }
  }
  onMounted(() => {
    window.addEventListener("click", eventListener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", eventListener);
  });
};
