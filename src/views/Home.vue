<script>
import axios from "axios";
import CardProduct from "@components/CardProduct.vue";
import { authComputed, paymentsMethods, cartMethods } from "@state/helpers";

export default {
  name: "Home",
  components: {
    CardProduct,
  },
  data() {
    return {
      products: [],
      message: "",
      query: ''
    };
  },
  methods: {
    ...paymentsMethods,
    ...cartMethods,
    async getProducts() {
      const res = await axios.get("http://localhost:4001/products");

      this.products = res.data.products;
    },
  },
  computed: {
    ...authComputed,
  },
  async mounted() {
    this.getProducts();
    this.query = new URLSearchParams(window.location.search);
    if (this.query.get("success")) {
      this.message = "Su compra se ha completado con exito!";
      await this.clearCart();
    }
    if (this.query.get("canceled")) {
      this.message =
        "Ha cancelado la Transacción";
    }
  },
};
</script>

<template>
  <div>
    <body>
      <div class="container">
        <div class="row" v-if="this.message">
          <div
            class="alert alert-dismissible fade show btn-block"
            :class="{'alert-success': this.query.get('success'), 'alert-danger': !this.query.get('success') }"
            role="alert"
          >
            <strong>{{ message }}</strong>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <audio src="@assets/audio/audio-inicio.mp3" autoplay></audio>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-4"
              v-for="product in products"
              :key="product._id"
            >
              <CardProduct
                :id="product._id"
                :name="product.name"
                :description="product.description"
                :imgURL="product.imageURL"
                :price="product.price"
                :quantity="product.quantity"
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<style scoped></style>
