import { userTodoCollection } from "../../../lib/firebase";
import { RootState } from "@/store/state";
import { ActionTree } from "vuex";
import { TodoState } from "./state";

const todoActions: ActionTree<TodoState, RootState> = {
  async getTodos({ commit, rootState }) {
    try {
      const user = rootState.user.currentUser;
      const response = await userTodoCollection
        .doc(user)
        .collection("todos")
        .get();
      const todos = response.docs.map((item) => {
        const data = item.data();
        return {
          id: item.id,
          title: data.title,
          checked: data.checked,
        };
      });
      commit("getTodos", todos);
    } catch (error) {
      console.log(error);
    }
  },
  async addTodo({ commit, rootState }, { title }) {
    try {
      const user = rootState.user.currentUser;
      const response = await userTodoCollection
        .doc(user)
        .collection("todos")
        .add({ title, checked: false });
      const newTodo = {
        id: response.id,
        title,
        checked: false,
      };
      commit("addTodo", newTodo);
    } catch (error) {
      console.log(error);
    }
  },
  async removeTodo({ commit, rootState }, { id }) {
    try {
      const user = rootState.user.currentUser;
      await userTodoCollection
        .doc(user)
        .collection("todos")
        .doc(id)
        .delete();
      commit("removeTodo", id);
    } catch (error) {
      console.log(error);
    }
  },
  async editTodo({ commit, rootState }, { id, title }) {
    try {
      const user = rootState.user.currentUser;
      await userTodoCollection
        .doc(user)
        .collection("todos")
        .doc(id)
        .update({ title });
      commit("editTodo", { id, title });
    } catch (error) {
      console.log(error);
    }
  },
  async checkTodo({ commit, rootState }, { id }) {
    try {
      const user = rootState.user.currentUser;
      const index = rootState.todo.todos.findIndex((el) => el.id === id);
      const checked = rootState.todo.todos[index].checked;
      await userTodoCollection
        .doc(user)
        .collection("todos")
        .doc(id)
        .update({ checked });
      commit("checkTodo", { id });
    } catch (error) {
      console.log(error);
    }
  },
};

export default todoActions;
