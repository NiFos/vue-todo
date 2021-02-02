import { createApp } from "vue";
import { Store } from "vuex";
import App from "./App.vue";
import { auth } from "./lib/firebase";
import router from "./router";
import store from "./store";
import { RootState } from "./store/state";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}

auth.onAuthStateChanged(() => {
  createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
});
