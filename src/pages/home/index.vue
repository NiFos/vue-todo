<template>
  <h1>Home</h1>
  <p>{{ some1 }}</p>
</template>

<script>
export default {
  created() {
    console.log("home");
  },
  data() {
    return {
      some1: this.$store.some,
    };
  },
};
</script>

<style></style>
