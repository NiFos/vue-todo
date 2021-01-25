<template>
  <Header msg="Todo app" />
  <Input @submit="submitHandler" />
  <list :todos="todos" @remove="removeHandler" @submitEdit="submitEdit"></list>
</template>

<script>
import Header from "./components/Header.vue";
import Input from "./components/Input.vue";
import List from "./components/List.vue";

let lastTaskId = 0;

export default {
  name: "App",
  components: {
    Header,
    List,
    Input,
  },
  data() {
    return {
      todos: [{ id: 0, title: "Eat", checked: false }],
    };
  },
  methods: {
    submitHandler(title) {
      lastTaskId++;
      this.todos.push({ id: lastTaskId, title, checked: false });
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
