<template>
  <input
    placeholder="Task title"
    type="text"
    v-model="data"
    v-on:keyup.enter="submit"
  />
</template>

<script>
export default {
  data() {
    return {
      data: "",
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.data);
      this.data = "";
    },
  },
};
</script>

<style>
</style>