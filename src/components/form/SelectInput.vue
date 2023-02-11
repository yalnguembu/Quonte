<template>
  <div class="block">
    <label for="select">{{ props.label }}</label>
    <div
      data-test="select-input"
      class="w-full relative bg-white rounded border px-4 py-3 w-full mt-2"
    >
      <input
        type="text"
        class="w-full bg-transparent"
        :placeholder="props.placeholder"
        v-model.trim="text"
        @focus="toggleIsFocused"
      />
      <ul
        :class="[
          'w-full absolute top-14 left-0  bg-white rounded shadow',
          { hidden: !isFocused },
        ]"
        v-if="isFocused"
      >
        <template v-if="options">
          <li
            class="px-4 py-2 hover:bg-gray-100 cursor-ponter"
            v-for="(option, index) in options"
            :key="index"
            @click="handelSelect(option)"
          >
            {{ option }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  modelValue: string;
  options: string[];
  error?: string;
}

const props = withDefaults(
  defineProps<{
    label: string;
    placeholder?: string;
    defaultValue?: string;
    modelValue: string;
    options: string[];
    error?: string;
  }>(),
  {
    error: "",
    placeholder: "",
    defaultValue: "",
  }
);
const emit = defineEmits(["update:modelValue"]);
const text = ref<string>(props.modelValue);
const select = ref<string>(props.defaultValue);
const options = ref(props.options);
const isFocused = ref<boolean>(false);

const toggleIsFocused = () => (isFocused.value = !isFocused.value);
const handelSelect = (value: string) => {
  text.value = value;
  toggleIsFocused();
  select.value = value;
};
const filter = (keyWord: string): void => {
  options.value = props.options.filter(
    (option: string) => option.toLowerCase().search(keyWord) !== -1
  );
};
watch(select, (value) => {
  emit("update:modelValue", value);
});
watch(text, (value: string) => {
  if (value.length > 0) filter(value.toLowerCase());
  else options.value = props.options;
});
</script>
