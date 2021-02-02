<template>
  <h1>Vue todo</h1>
  <v-input @submit="submitHandler" />
  <todo-list
    :todos="todos"
    @remove="removeHandler"
    @submitEdit="submitEdit"
    @check="check"
  ></todo-list>
</template>

<script>
import { defineComponent } from "vue";
import TodoList from "../../components/todo-list.vue";
import vInput from "../../components/v-input.vue";
export default defineComponent({
  components: { vInput, TodoList },

  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  },
  mounted() {
    this.$store.dispatch("todo/getTodos");
  },
  methods: {
    submitHandler(title) {
      this.$store.dispatch("todo/addTodo", { title });
    },
    removeHandler(id) {
      this.$store.dispatch("todo/removeTodo", { id });
    },
    submitEdit(id, title) {
      this.$store.dispatch("todo/editTodo", { id, title });
    },
    check(id) {
      this.$store.dispatch("todo/checkTodo", { id });
    },
  },
});
</script>

<style></style>
