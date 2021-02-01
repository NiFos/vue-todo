<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

  components: {},
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    submitHandler(title) {
      this.todos.push({ title, checked: false });
    },
    removeHandler(id) {
      const index = this.todos.findIndex((el) => el.id === id);
      this.todos.splice(index, 1);
    },
    submitEdit(id, title) {
      const index = this.todos.findIndex((el) => el.id === id);
      this.todos[index].title = title;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
</style>
