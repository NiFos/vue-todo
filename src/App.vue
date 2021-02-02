<template>
  <router-view />
</template>

<script lang="ts">
import { auth } from "./lib/firebase";
import store from "./store";

export default {
  name: "App",
  mounted() {
    const user = auth.currentUser;
    if (user) {
      store.commit("user/auth", user.email);
    }
  },
  components: {},
  data() {
    return {
      todos: [],
    };
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
