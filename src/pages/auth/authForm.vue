<template>
  <form @submit.prevent="submitHandler">
    <div>
      <label for="isReg">I want to register</label>
      <input type="checkbox" id="isReg" v-model="isReg" />
    </div>
    <div>
      <label for="email">Email</label>
      <input v-model="form.email.value" name="email" id="email" required />
    </div>
    <div>
      <label for="email">Password</label>
      <input
        v-model="form.password.value"
        name="password"
        id="password"
        type="password"
        required
      />
    </div>
    <button type="submit" :disabled="!isFormValid">
      {{ isReg ? "Sign up" : "Sign in" }}
    </button>
  </form>
</template>

<script>
import { validateEmail, minLength } from "../../lib/validation";

const formInitData = {
  email: {
    valid: false,
    touched: false,
    value: "",
  },
  password: {
    valid: false,
    touched: false,
    value: "",
  },
};

export default {
  data() {
    return {
      form: formInitData,
      isReg: false,
    };
  },
  emits: ["submitHandler"],
  watch: {
    form: {
      handler(value) {
        this.$data.form.email.touched = true;
        this.$data.form.password.touched = true;
        this.validateForm(value);
      },
      deep: true,
    },
  },
  computed: {
    isFormValid() {
      return (
        this.$data.form.email.valid &&
        this.$data.form.email.touched &&
        this.$data.form.password.valid &&
        this.$data.form.password.touched
      );
    },
  },
  methods: {
    submitHandler() {
      if (this.isFormValid) {
        const email = this.$data.form.email.value;
        const password = this.$data.form.password.value;
        this.$emit("submitHandler", email, password, this.isReg);
      }
    },
    validateForm(value) {
      this.$data.form.email.valid = validateEmail(value.email.value);
      this.$data.form.password.valid = minLength(value.password.value, 6);
    },
  },
};
</script>

<style></style>
