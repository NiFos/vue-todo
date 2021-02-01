const { createStore } = require("vuex");

const store = createStore({
  state() {
    return {
      currentUser: "",
    };
  },
});

export default store;
