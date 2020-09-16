export default [
  {
    path: "/",
    name: "Home",
    component: () => import("@views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      requiresAuth: true
    },
    component: () => import("@views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@views/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@views/SignUp.vue"),
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    meta: {
      requiresAuth: true
    },
    component: () => import("@views/ShoppingCart.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];
