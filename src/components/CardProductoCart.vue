<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
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
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    subtotalProduct() {
      return this.price * this.quantity;
    },
  },
};
</script>

<template>
  <div class="row mt-5">
    <div class="col-4">
      <img
        :src="image"
        width="100%"
        alt="adad"
        class="align-middle mb-4"
      />
    </div>
    <div class="col-6">
      <ul class="list-group">
        <li class="list-group-item">
          <b>{{ name }}</b>
        </li>
        <li class="list-group-item">{{ description }}</li>
        <li class="list-group-item">Precio por unidad: $ {{ price }}</li>
        <li class="list-group-item">Cantidad: {{ quantity }}</li>
        <li class="list-group-item">Subtotal: $ {{ subtotalProduct }}</li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
