import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { prepareApis, getRefreshToken } from "./utils/api-config";
import { useSessionStore } from "./stores/session";
import { appear } from "./utils/custom-directive";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia()).use(router);
app.directive("appear", appear);
prepareApis();

router.beforeEach(async (to, from, next) => {
  const authRequired = !to.meta.isPublic;
  const sessionStore = useSessionStore();
  if (authRequired) {
    if (!sessionStore.isSigned) {
      if (await getRefreshToken()) {
        try {
          await sessionStore.refreshToken(await getRefreshToken());
          return next();
        } catch (error) {
          console.log(error);
          router.push("/auth/sign-in");
        }
      }
      router.push("/auth/sign-in");
    }
    // await router.push("/auth/sign-in");
  }
  next();
});

app.mount("#app");
