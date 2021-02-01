<template>
  <h1>Vue todo</h1>
  <v-input @submit="submitHandler" />
</template>

<script>
import vInput from "../../components/v-input.vue";
export default {
  components: { vInput },
  data() {
    return {
      some1: this.$store.some,
    };
  },
  methods: {
    submitHandler(title) {
      this.$store.dispatch("todo/addTodo", { title });
      // this.todos.push({ title, checked: false });
    },
  },
};
</script>

<style></style>
