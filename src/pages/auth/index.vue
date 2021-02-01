<template>
  <h1>Auth</h1>
  <auth-form @submitHandler="submitHandler" />
</template>

<script>
import authForm from "./authForm.vue";

export default {
  components: { authForm },
  methods: {
    submitHandler(email, password, isReg) {
      this.$store.dispatch("user/auth", { email, password, isReg });
    },
  },
};
</script>

<style></style>
