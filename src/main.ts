import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { prepareApis, getAccessToken } from "./utils/api-config";
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
  const accessToken = (await getAccessToken()) ?? "";
  if (authRequired) {
    if (!sessionStore.isSigned) {
      if (accessToken) {
        try {
          await sessionStore.verifyAccessToken(accessToken);
          return next();
        } catch (error) {
          console.log(error);
          router.push("/auth/sign-in");
        }
      }
      router.push("/auth/sign-in");
    }
  } else if (to.name === "home" && accessToken) {
    await sessionStore.verifyAccessToken(accessToken);
  }
  next();
});

app.mount("#app");
