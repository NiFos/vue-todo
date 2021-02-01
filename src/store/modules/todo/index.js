import todoActions from "./actions";
import todoMutations from "./mutations";

const todoModule = {
  namespaced: true,
  state() {
    return {
      todos: [],
    };
  },
  actions: todoActions,
  mutations: todoMutations,
};

export default todoModule;
