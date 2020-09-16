<script>
import { cartComputed, cartMethods, paymentsMethods, paymentsComputed } from '@state/helpers'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...cartMethods,
    ...paymentsMethods,
    onAddCart() {
      this.setProductCart({ id_product: this.id, quantity: 1 })
    },
    onPay() {
      this.payOneProduct({ id_product: this.id, quantity: 1 });
    }
  }
};
</script>

<template>
  <div class="card mt-5 justify-center" style="width: 18rem;">
    <img :src="this.imgURL" alt="Card image cap" height="300" />
    <div class="card-body">
      <h5 class="card-title">{{ this.name }}</h5>
      <p class="card-text">{{ this.description }}</p>
      <label><b>Precio:</b> ${{ this.price }}</label>
      <br />
      <label><b>Cantidad:</b> {{ this.quantity }} unidades</label>
      <hr />
      <button class="btn btn-primary mr-3" @click="onAddCart">Añadir a Carrito</button>
      <button class="btn btn-success" @click="onPay">Comprar</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
