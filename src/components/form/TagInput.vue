<template>
  <div>
    <label v-if="label" class="font-500 dark:text-gray-100">{{ label }}</label>
    <div class="flex w-full overflow-hidden">
      <div
        :class="[
          'rounded border px-3 py-1 w-full flex mt-2 bg-transparent outline-none dark:text-gray-100 dark:border-gray-700 relative',
          errors?.length
            ? 'outline-red-500'
            : isValid
            ? 'outline-green-500 dark:outline-green-600'
            : isOptionsListVisible
            ? 'focus:outline-blue-500 dark:focus:outline-blue-600'
            : '',
        ]"
      >
        <div v-if="withPreview">
          <TagItem
            :id="tag.id"
            v-for="(tag, index) in tagsPreview"
            :key="index"
            :title="tag.title"
          />
        </div>
        <input
          type="text"
          class="bg-transparent outline-2 px-2 outline-green-700 w-full"
          :placeholder="placeholder"
          v-model="preview"
          @click.stop="toggleIsOptionsListVisibility"
        />
        <ul
          class="border dark:border-gray-700 rounded p-2 block absolute top-10 left-0 z-10 bg-white dark:bg-gray-800 w-full max-h-40 overflox-y-auto shadow-xl"
          v-if="isOptionsListVisible"
          ref="opionsList"
        >
          <li v-if="!tagsList.length" class="dark:text-gray-100">
            Noting found
          </li>
          <template v-else>
            <li
              v-for="(tag, index) in tagsList"
              :key="index"
              @click="() => select(tag.id)"
              class="px-2 py-1 rounded dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {{ tag.title }}
            </li>
          </template>
        </ul>
      </div>
      <BaseButton title="Add" v-if="withPreview" @click="addTags" />
    </div>
    <p
      :data-test="error.$property"
      v-show="props.errors?.length"
      v-for="error in props.errors"
      :key="error.$uid"
      class="pt-1 text-red-500 transition delay-500 text-sm"
    >
      {{ error.$message }}
    </p>
    <div class="flex flex-wrap">
      <button
        v-for="tagId in modelValue"
        :key="tagId as string"
        @click="() => removeTag(tagId as string)"
      >
        <TagItem :title="tags.find((tag) => tagId === tag.id)?.title" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import type { Tag as TagType } from "@/utils/type";
import { useDetectOutsideClick } from "@/utils/outsideClick";
import BaseButton from "../button/BaseButton.vue";
import TagItem from "../TagItem.vue";
import type { ErrorObject } from "@vuelidate/core";

const props = withDefaults(
  defineProps<{
    modelValue: string[];
    withPreview?: boolean;
    label?: string;
    placeholder?: string;
    tags: TagType[];
    errors?: ErrorObject[];
    isValid?: boolean;
  }>(),
  {
    errors: () => [],
    isValid: false,
    withPreview: false,
    tags: () => [],
  }
);

const emit = defineEmits(["update:modelValue", "addTags"]);

const preview = ref<string>("");
const tagsPreview = ref<TagType[]>([]);
const tagsList = ref<TagType[]>(
  props.tags.filter((tag) => !props.modelValue.includes(tag.id))
);
const isOptionsListVisible = ref<boolean>(false);
const optionsList = ref<HTMLUListElement | undefined>();

watch(preview, (value) => {
  tagsList.value = props.tags.filter((tag) => tag.title.search(value) !== -1);
});

watch(props, (value) => {
  tagsList.value = value.tags.filter(
    (tag) => !props.modelValue.includes(tag.id)
  );
});

const addTags = () => {};

const removeTag = (id: string) => {
  emit(
    "update:modelValue",
    props.modelValue.filter((tag) => tag !== id)
  );
};

const select = (id: string) => {
  emit("update:modelValue", [...props.modelValue, id]);
};
const toggleIsOptionsListVisibility = () =>
  (isOptionsListVisible.value = !isOptionsListVisible.value);

useDetectOutsideClick(optionsList, () => {
  if (isOptionsListVisible.value) toggleIsOptionsListVisibility();
});
</script>
