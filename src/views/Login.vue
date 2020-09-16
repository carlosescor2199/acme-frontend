<script>
import { authApiMethods, authComputed } from "@state/helpers";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    ...authApiMethods,
    onLogin() {
      this.logIn({ email: this.email, password: this.password }).then((res) => {
        if (res.token) {
          this.$router.push("/");
        } else {
          this.errors = Object.values(res.errors);
        }
      });
    },
    clearErrors() {
      let size = Object.keys(this.errors).length
      size - 1 > 0 ? delete this.errors[size-1] : this.errors = []
    },
  },
  computed: {
    ...authComputed,
  },
};
</script>

<template>
  <div class="container">
    <div class="row" v-if="errors.length > 0">
      <div
        class="alert alert-danger alert-dismissible fade show btn-block"
        role="alert"
        v-for="error in errors"
        :key="error"
      >
        <strong>{{ error }}</strong>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="clearErrors"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="from-group">
          <img
            src="https://res.cloudinary.com/dzcohngmw/image/upload/v1600036962/acme_cpxnhb.png"
            alt="Logo login"
            height="300"
            class="mt-5 mb-4"
          />
          <input
            type="text"
            placeholder="Entre your user"
            class="mb-4 form-control"
            v-model="email"
          />
          <input
            type="password"
            placeholder="Entre your password"
            class="mb-4 form-control"
            v-model="password"
          />
          <button
            type="button"
            class="btn btn-success btn-block"
            @click="onLogin"
          >
            Ingresar
          </button>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
