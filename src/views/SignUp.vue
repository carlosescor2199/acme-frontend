<script>
import { authApiMethods, authComputed } from "@state/helpers";

export default {
  name: "signup",
  components: {},
  data() {
    return {
      firstname: "",
      lastname: "",
      birthDate: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: [],
    };
  },
  methods: {
    ...authApiMethods,
    onSignUp() {
      this.signUp({
        firstname: this.firstname,
        lastname: this.lastname,
        birthDate: this.birthDate,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      }).then((res) => {
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
    }
  },
};
</script>

<div class="form-group">

        </div>
<template>
  <div class="container-fluid">
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
    <div id="imgFondo"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center mt-5 mb-5 text-black">Registro</h1>
          <div class="row" id="texto">
            <div class="col-6">
              <div class="form-group">
                <label class="text-bird font-weight-bold">Nombre</label>
                <input type="text" class="form-control" v-model="firstname" />
                <small class="form-text text-muted font-weight-bold"
                  >Ingrese sus nombres</small
                >
              </div>
              <div class="form-group">
                <label class="font-weight-bold">Correo</label>
                <input type="email" class="form-control" v-model="email" />
                <small class="form-text text-muted font-weight-bold"
                  >Ingrese su correo</small
                >
              </div>
              <div class="form-group">
                <label class="font-weight-bold">Fecha de nacimiento</label>
                <input class="form-control" type="date" v-model="birthDate" />
                <small class="form-text text-muted font-weight-bold"
                  >Ingrese la fecha de nacimiento (DD/MM/AA)</small
                >
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label class="font-weight-bold">Apellidos</label>
                <input type="text" class="form-control" v-model="lastname" />
                <small class="form-text text-muted font-weight-bold"
                  >Ingrese sus apellidos</small
                >
              </div>
              <div class="form-group">
                <label class="font-weight-bold">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
                <small class="form-text text-muted font-weight-bold"
                  >Ingrese la contraseña</small
                >
              </div>

              <div class="form-group">
                <label class="font-weight-bold">Confirmar contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="confirmPassword"
                />
                <small class="form-text text-muted font-weight-bold"
                  >Vuelva a ingresar la contraseña</small
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
              <div class="form-group mt-2">
                <button
                  type="button"
                  class="btn btn-dark btn-block"
                  id="boton"
                  @click="onSignUp"
                >
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#imgFondo {
  background: black
    url("https://res.cloudinary.com/dzcohngmw/image/upload/v1600146969/fondoLogin_e7yjth.png");
  background-size: cover;
  background-position: center;
  opacity: 0.4;
  width: 100%; /* en porcentaje (el highlight del foro lo trasforma) */
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
}
#boton {
  font-size: 120%;
}
</style>
