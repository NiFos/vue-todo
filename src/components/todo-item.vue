<template>
  <li>
    <span v-if="!edit" @dblclick="toggleEdit">
      {{ todo.title }}
    </span>
    <input v-else v-model="newTitle" autofocus @keyup.enter="submitEdit" />
    <button @click="remove">Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      id: Number,
      title: String,
      checked: Boolean,
    },
  },
  data() {
    return {
      newTitle: this.todo.title,
      edit: false,
    };
  },
  methods: {
    remove() {
      this.$emit("remove", this.todo.id);
    },
    submitEdit() {
      this.$emit("submitEdit", this.todo.id, this.newTitle);
      this.toggleEdit();
    },
    toggleEdit() {
      this.edit = !this.edit;
    },
  },
};
</script>

<style>
</style>