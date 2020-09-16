<script>
import { authComputed, authApiMethods } from "@state/helpers";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    ...authApiMethods,
    onLogout() {
      this.logOut().then((e) => this.$router.push("/login"));
    },
  },
  computed: {
    ...authComputed,
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" id="lista">
          <li class="nav-item">
            <router-link class="nav-link text-white" id="fuente" to="/"
              >Productos</router-link
            >
          </li>
        </ul>

        <div class="btn-group" v-if="this.loggedIn">
          <button
            type="button"
            class="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="https://res.cloudinary.com/dzcohngmw/image/upload/v1600150570/user_ssmf2t.png"
              alt="Cargando immagen de usuario"
            />
          </button>
          <div class="dropdown-menu">
            <label class="dropdown-item">Eduard Garcia</label>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" @click="onLogout">
              Cerrar Sesión
            </button>
          </div>
        </div>

        <div class="btn-group" v-else>
          <button
            type="button"
            class="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="https://res.cloudinary.com/dzcohngmw/image/upload/v1600150570/user_ssmf2t.png"
              alt="Cargando immagen de usuario"
            />
          </button>
          <div class="dropdown-menu">
            <router-link to="/login">
              <label class="dropdown-item">Iniciar Sesión</label>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/signup">
              <label class="dropdown-item">Registrarse</label>
            </router-link>
          </div>
        </div>

        <div class="btn-group" id="logoBuy">
          <router-link
            to="/cart"
            type="button"
            class="btn btn-dark"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="https://res.cloudinary.com/dzcohngmw/image/upload/v1600150566/buy_ryaedy.png"
              alt="Cargando immagen de carro de compras"
            />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
#logoBuy {
  margin-right: 10%;
}

#fuente {
  font-size: 130%;
}

#lista {
  margin-left: 10%;
}
</style>
