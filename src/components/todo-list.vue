<template>
  <ul>
    <todo-item
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @remove="remove"
      @submitEdit="submitEdit"
      @check="check"
    ></todo-item>
  </ul>
</template>

<script>
import TodoItem from "./todo-item.vue";
export default {
  props: {
    todos: Array,
  },
  components: {
    TodoItem,
  },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
    submitEdit(id, title) {
      this.$emit("submitEdit", id, title);
    },
    check(id) {
      this.$emit("check", id);
    },
  },
};
</script>

<style>
</style>