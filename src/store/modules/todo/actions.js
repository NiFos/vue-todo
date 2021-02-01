import { todoCollection } from "../../../lib/firebase";

const todoActions = {
  async addTodo({ commit, rootState }, { title }) {
    try {
      const user = rootState.user.currentUser;
      const response = await todoCollection.add({ title, user });
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
};

export default todoActions;
