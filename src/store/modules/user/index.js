import userActions from "./actions";
import userMutations from "./mutations";

const userModule = {
  namespaced: true,
  state() {
    return {
      currentUser: "",
    };
  },
  actions: userActions,
  mutations: userMutations,
};

export default userModule;
