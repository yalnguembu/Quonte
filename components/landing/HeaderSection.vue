<template>
  <div
    class="min-h-[95vh] w-full flex flex-col justify-around px-2 py-4 sm:px-4 md:min-h-fit lg:min-h-[95vh] lg:flex-row-reverse lg:w-4/5 lg:justify-between mx-auto"
  >
    <section
      class="p-8 flex justify-center items-center md:py-12 lg:w-full lg:h-[85vh] lg:p-0"
    >
      <div v-motion-slide-visible-bottom>
        <div
            class="w-4/5 mx-auto flex justify-center items-center relative lg:w-full"
        >
          <img
              :alt="t('logoAlt')"
              src="@/assets/images/logo.svg"
              class="w-full -rotate-45 opacity-60 blur-xl dark:blur-2xl border"
          />
          <div class="w-full flex justify-center items-center absolute">
            <img
                :alt="t('logoAlt')"
                src="@/assets/images/logo.svg"
                class="drop-shadow-3xl w-4/5 rotate-45"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="h-1/2 px-2 py-6 flex flex-col justify-center sm:mt-12 sm:px-4 md:px-24 md:py-12 lg:p-12 lg:py-16 lg:w-full lg:h-[85vh] lg:pl-0 lg:mt-0"
    >
      <div  v-motion-slide-visible-bottom>
        <h2
            class="text-5xl font-bold text-green-800 dark:text-green-200 mt-4 lg:text-7xl xl:mb-8 text-pretty"
        >
          {{ t("title") }}
        </h2>
        <p
            class="text-lg text-gray-800 dark:text-gray-300 mt-4 lg:text-xl xl:mb-12"
        >
          {{ t("subtitle") }}
        </p>
        <div class="mt-6 grid md:block">
          <RouterLink
            :title="t('loginButtonTitle')"
            to="/auth/sign-in"
            class="w-full px-8 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
          >
            {{ t("loginButton") }}
          </RouterLink>
          <a
            :title="t('twitterButtonTitle')"
            target="_blank"
            href="https://twitter.com/yalnguembu"
            class="w-full px-8 py-2 mt-4 rounded border dark:border-green-300 bg-transparent text-green-900 dark:text-green-200 text-center text-lg hover:text:green-800 hover:bg-gray-800 dark:hover:border-transparent md:ml-4 md:mt-0 md:w-fit"
          >
            <TwitterIconVue
              class="align-middle mr-3 w-5 h-5 dark:fill-green-200"
            />
            {{ t("twitterButton") }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<i18n lang="json">
{
  "en": {
    "logoAlt": "Infinite notes - logo",
    "title": "Your limitless note taking solution",
    "subtitle": "Never forget a thought again. Infinite Notes is your all-in-one note-taking app, letting you capture everything from ideas to grocery lists. Take notes on the go and access them from any device.",
    "illustrationAlt": "stars illustration",
    "loginButton": "Get started",
    "loginButtonTitle": "go to login page",
    "twitterButton": "Follow us",
    "twitterButtonTitle": "Opening Twitter"
  },
  "fr": {
    "logoAlt": "Logo- Infinite Notes",
    "title": "Essayons quelque chose d'extraordinaire",
    "subtitle": "N'oubliez plus jamais une idée. Infinite Notes est une application de prise de notes tout-en-un qui vous permet de tout noter, des idées aux listes de courses. Prenez des notes en déplacement et accédez-y depuis n'importe quel appareil.",
    "illustrationAlt": "illustration d'étoiles",
    "loginButton": "Commencer",
    "loginButtonTitle": "aller à la page de connexiongo to login page",
    "twitterButton": "Suivez nous",
    "twitterButtonTitle": "Ouvrir Twitter"
  }
}
</i18n>
<script lang="ts" setup>
import TwitterIconVue from "@/components/icons/TwitterIcon.vue";

const { t } = useI18n({
  useScope: 'local'
});
</script>
