import axios from "axios";
import environment from "@src/environment.js";

export const state = {
  cart: [],
};

export const getters = {
  // Whether the user is currently logged in.
  hasCart(state) {
    return !!state.cart;
  },
};

export const mutations = {
  setCart(state, newValue) {
    state.cart = newValue;
  },
};

export const actions = {
  init({ state, dispatch }) {
    dispatch('getCart');
  },

  setProductCart(
    { commit, dispatch, getters },
    { id_product, quantity } = {}
  ) {
    return axios
      .post(environment.CART_URL, {
        id_product,
        quantity
      })
      .then((res) => {
        dispatch('getCart');
        return res.data;
      });
  },

  // Logs in the current user.
  getCart({ commit, dispatch, getters }) {
    return axios
      .get(environment.CART_URL)
      .then((res) => {
        commit('setCart', res.data.cart);
        return res.data.cart;
      });
  },

  // Logs out the current user.
  clearCart({ commit, dispatch }) {
    return axios
      .delete(environment.CART_URL)
      .then((res) => {
        commit('setCart', []);
        dispatch('getCart')
        return res;
      });
  },
};

