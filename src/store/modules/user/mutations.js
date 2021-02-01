const userMutations = {
  auth(state, payload) {
    state.currentUser = payload;
  },
};

export default userMutations;
