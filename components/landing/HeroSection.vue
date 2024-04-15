<template>
  <div class="h-full grid gap-x-8 lg:grid-cols-2 lg:w-4/5 xl:py-8 mx-auto items-center">
      <section class="h-full flex items-center justify-center py-8 lg:py-4" v-motion-slide-visible-once-left>
        <img
          src="@/assets/images/not-board.svg"
          class="w-1/2 lg:w-full hover:scale-125 hover:drop-shadow-md hero-image"
          :alt="t('logoAlt')"
        />
      </section>
      <section class="py-12 px-6 sm:px-12 lg:px-4" v-motion-slide-visible-bottom>
        <h3
          class="font-bold text-green-800 text-4xl dark:text-gray-100 relative"
        >
          <span> {{ t("title") }} </span>

          <img
            v-motion-roll-visible-bottom
            src="@/assets/images/Group 5597.svg"
            :alt="t('createButtonTitle')"
            class="absolute w-20 h-20 -top-20 -right-5 lg:-right-12 lg:-top-10"
          />
        </h3>
        <p class="text-gray-500 dark:text-gray-300 text-lg my-8">
          {{ t("description") }}
        </p>
        <BaseButton :title="t('createButtonTitle')" />
      </section>
  </div>
</template>
<i18n lang="json">
{
  "en": {
    "logoAlt": "Infinite Notes - logo",
    "title": "Let'us try something amazing",
    "description": "Infinite Notes is your digital notepad for everything under the sun. Capture fleeting ideas, brainstorm like a pro, and keep your thoughts organized – the possibilities are infinite.",
    "createButtonTitle": "New Note",
    "illustrationAlt": "stars illustration"
  },
  "fr": {
    "logoAlt": "Logo- Infinite Notes",
    "title": "Essayons quelque chose d'extraordinaire",
    "description": "Infinite Notes est votre bloc-notes numérique pour tout ce qui se passe sous le soleil. Capturez les idées fugaces, faites du brainstorming comme un pro et organisez vos pensées - les possibilités sont infinies.",
    "createButtonTitle": "Nouvelle note",
    "illustrationAlt": "illustration d'étoiles"
  }
}
</i18n>
<style scoped>
.hero-image:hover {
  transform: rotateY(180deg);
  transition: all;
  transition-duration: 500ms;
}
</style>
<script lang="ts" setup>
import BaseButton from "@/components/button/BaseButton.vue";

const { t } = useI18n({
  useScope: 'local'
});
</script>
