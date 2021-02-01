const todoMutations = {
  addTodo(state, payload) {
    state.todos.push(payload);
  },
};

export default todoMutations;
