import { RootState } from "@/store/state";
import { Module } from "vuex";
import userActions from "./actions";
import userMutations from "./mutations";
import { UserState } from "./state";

const userModule: Module<UserState, RootState> = {
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
