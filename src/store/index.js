import { createStore } from "vuex";
import todoModule from "./modules/todo/index.js";
import userModule from "./modules/user/index.js";

const store = createStore({
  modules: {
    user: userModule,
    todo: todoModule,
  },
});

export default store;
