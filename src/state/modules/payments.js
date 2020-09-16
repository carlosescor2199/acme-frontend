import axios from "axios";
import { loadStripe } from '@stripe/stripe-js'
import environment from "@src/environment.js";

const stripePromise = loadStripe("pk_test_51HQH5UK4oBzGA7ax9ueMZ28FRO9CjhNyw0yQFCD28bUpx6Rp4pdk2SgQH41ChqGV7lwxWL9QEGebE6xnqY7DaTei00FcR5qbzc");

export const state = {
  sessionId: '',
};

export const getters = {
  // Whether the user is currently logged in.
  hasSession(state) {
    return !!state.sesionId;
  },
};

export const mutations = {
  setSession(state, newValue) {
    state.sesionId = newValue;
  },
};

export const actions = {

  payOneProduct(
    { commit, dispatch, getters },
    { id_product, quantity } = {}
  ) {
    return axios
      .post(environment.PAYMENT_URL, {
        id_product,
        quantity
      })
      .then(async (res) => {
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
            sessionId: res.data.id,
        });
        return res.data.id;
      });
  },

  // Logs in the current user.
  payCartProducts(
    { commit, dispatch, getters },
    {products} = {}
  ) {
    return axios
      .post(environment.PAYMENT_CART_URL, {
        products
      })
      .then(async (res) => {
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
            sessionId: res.data.id,
        });
        return res.data.id;
      });
  },
};
