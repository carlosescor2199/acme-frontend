import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

// Computed
export const authComputed = {
  ...mapState("auth", ["currentUser"]),
  ...mapGetters("auth", ["loggedIn", "isAdmin"])
};

export const cartComputed = {
  ...mapState("cart", ["cart"]),
  ...mapGetters("cart", ["hasCart"])
}

export const paymentsComputed = {
  ...mapState("payments", ["sessionId"]),
  ...mapGetters("payments", ["hasSession"])
}

// Methods
export const authApiMethods = mapActions("auth", [
  "logIn",
  "logOut",
  "signUp",
  "resetPassword"
]);

export const cartMethods = mapActions("cart", [
  "setProductCart",
  "getCart",
  "clearCart"
])

export const paymentsMethods = mapActions("payments", [
  "payOneProduct",
  "payCartProducts"
])