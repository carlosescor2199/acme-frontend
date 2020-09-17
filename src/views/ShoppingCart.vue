<script>
import axios from "axios";
import CardProductCart from "@components/CardProductoCart.vue";
import { cartComputed, cartMethods, paymentsMethods } from "@state/helpers";

export default {
  name: "shoppingCart",
  components: {
    CardProductCart,
  },
  data() {
    return {
      shoppingCart: [],
      paymentCart: []
    };
  },
  computed: {
    ...cartComputed,
    total() {
        return this.calculateTotal();
    }
  },
  methods: {
    ...cartMethods,
    ...paymentsMethods,
    async onGetCart() {
      this.getCart();
      this.shoppingCart = this.cart;
    },
    async onClearCart() {
      this.clearCart();
    },
    async onPaymentCart() {
        this.cart.products.forEach(product => {
            const item = {
                id_product: product.id_product,
                quantity: product.quantity
            }
            this.paymentCart.push(item)
        });
        this.payCartProducts({products: this.paymentCart})
    },
    calculateTotal() {
        let total = 0;
        for(const product in this.shoppingCart.products) {
            total += (this.shoppingCart.products[product].price * this.shoppingCart.products[product].quantity)
        }

        return total
    }
  },
  mounted() {
    this.cart ? this.onGetCart() : null;
  },
};
</script>

<template>
  <div class="container">
    <div class="row" v-if="this.cart">
      <div class="col-md-10">
        <CardProductCart
          v-for="product in shoppingCart.products"
          :key="product._id"
          :image="product.imageURL"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :quantity="product.quantity"
        />
      </div>
      <div class="col-md-2 mt-2">
        <button class="btn-primary btn-block" @click="onPaymentCart">Pagar</button>
        <button class="btn-danger btn-block mt-5" @click="onClearCart">Vaciar</button>
        <h3 class="mt-3">Total: ${{ total }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
