import { createStore } from "vuex";
import todoModule from "./modules/todo";
import userModule from "./modules/user";
import { RootState } from "./state";

const store = createStore<RootState>({
  modules: {
    user: userModule,
    todo: todoModule,
  },
});

export default store;
