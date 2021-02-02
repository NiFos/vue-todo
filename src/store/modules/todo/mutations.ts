import { MutationTree } from "vuex";
import { TodoState } from "./state";

const todoMutations: MutationTree<TodoState> = {
  getTodos(state, payload) {
    state.todos = payload;
  },
  addTodo(state, payload) {
    state.todos.push(payload);
  },
  removeTodo(state, { id }) {
    const index = state.todos.findIndex((el) => el.id === id);
    state.todos.splice(index, 1);
  },
  editTodo(state, { id, title }) {
    const index = state.todos.findIndex((el) => el.id === id);
    state.todos[index].title = title;
  },
  checkTodo(state, { id }) {
    const index = state.todos.findIndex((el) => el.id === id);
    state.todos[index].checked = !state.todos[index].checked;
  },
};

export default todoMutations;
