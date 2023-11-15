<template>
  <div
    class="w-full h-[92vh] dark:bg-gray-900 flex items-start justify-center lg:items-center"
  >
    <div
      class="card bg-white dark:bg-gray-900 p-8 rounded-lg w-full dark:border-gray-700 lg:shadow-xl lg:border lg:p-9 lg:p-9 lg:w-1/2"
    >
      <div class="lg:text-center">
        <h1 class="font-bold text-xl text-green-700 dark:text-gray-100">
          Sign Up
        </h1>
        <p class="text-gray-500 dark:text-gray-400 py-6 lg:p-6">
          Welcome back! We need some informations for configure your personal
          space
        </p>
      </div>
      <div v-if="requestError" class="mb-4">
        <AlertBox :summary="requestError" :alert-type="ALERT_BOX_TYPE.ERROR" />
      </div>
      <form @submit.prevent="signIn">
        <div class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
          <TextInput
            data-test="username-input"
            label="username"
            placeholder="Enter your username"
            v-model="user.username"
            :errors="v$.username.$errors"
            :isValid="!v$.username.$silentErrors.length"
          />
          <EmailInput
            data-test="email-input"
            label="Email"
            placeholder="Enter your email adress"
            v-model="user.email"
            :errors="v$.email.$errors"
            :isValid="!v$.email.$silentErrors.length"
          />
        </div>
        <div class="mb-4">
          <PasswordInput
            data-test="password-input"
            label="Password"
            placeholder="Enter your password"
            v-model="user.password"
            :errors="v$.password.$errors"
            :isValid="!v$.password.$silentErrors.length"
          />
        </div>
        <div class="w-full mb-6 mt-6">
          <BaseButton
            data-test="submit-button"
            :type="ButtonType.submit"
            :disable="v$.$silentErrors.length"
            :title="signing ? 'Signing...' : 'Sign Up'"
            class="w-full"
            :theme="`w-full px-8 py-1 ${
              v$.$silentErrors.length || signing
                ? 'bg-green-600/30 cursor-not-allowed dark:bg-green-300/20 dark:text-green-400'
                : 'bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200'
            } text-white dark:text-green-900 rounded text-lg transition delay-200`"
          />
        </div>
      </form>
      <h2 class="text-gray-500 text-sm text-center">
        Already member of us?
        <RouterLink
          to="sign-in"
          class="text-black dark:text-gray-100 hover:underline"
        >
          Go within!
        </RouterLink>
      </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSessionStore } from "@/stores/session";
import { computed, reactive, shallowRef } from "vue";
import { useRouter } from "vue-router";
import { ButtonType } from "@/utils/type";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AuthenticationError } from "@/utils/error";
import { ALERT_BOX_TYPE, REGEX } from "@/utils/enum";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import BaseButton from "@/components/button/BaseButton.vue";
import EmailInput from "@/components/form/EmailInput.vue";
import PasswordInput from "@/components/form/PasswordInput.vue";
import TextInput from "@/components/form/TextInput.vue";
import AlertBox from "@/components/AlertBox.vue";

type User = {
  username: string;
  email: string;
  password: string;
};

const sessionStore = useSessionStore();

const user = reactive<User>({
  username: "",
  email: "",
  password: "",
});

const signing = shallowRef<boolean>(false);
const requestError = shallowRef<string>("");

const rules = computed(() => ({
  username: {
    required: helpers.withMessage(
      "You may forgot to field this input",
      required
    ),
  },
  email: {
    email: helpers.withMessage("This email does't repesct the format", email),
    required: helpers.withMessage(
      "You may forgot to field this input",
      required
    ),
  },
  password: {
    required: helpers.withMessage(
      "You may forgot to field this input",
      required
    ),
    mustBeValidPassword: helpers.withMessage(
      "This filed does't repect the awaited format",
      helpers.regex(REGEX.PASSWORD)
    ),
  },
}));

const v$ = useVuelidate(rules, user);

const signIn = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    try {
      signing.value = true;
      await sessionStore.signUp({
        username: user.username,
        email: user.email,
        password: user.password,
      });
      useRouter().push("/");
    } catch (error: AuthenticationError | any) {
      requestError.value = error.message;
    } finally {
      setTimeout(() => (signing.value = false), 1000);
      user.password = "";
    }
  }
};
</script>
