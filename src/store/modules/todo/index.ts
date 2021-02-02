import { RootState } from "@/store/state";
import { Module } from "vuex";
import todoActions from "./actions";
import todoMutations from "./mutations";
import { TodoState } from "./state";

const todoModule: Module<TodoState, RootState> = {
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
