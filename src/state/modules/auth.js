import axios from "axios";
import environment from "@src/environment.js";

export const state = {
  currentUser: window.localStorage.getItem("authorization"),
};

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.currentUser;
  },
};

export const mutations = {
  setCurrentUser(state, newValue) {
    if (newValue) {
      state.currentUser = `Bearer ${newValue}`;
      window.localStorage.setItem("authorization", `Bearer ${newValue}`);
      setDefaultAuthHeaders(state);
    } else {
      state.currentUser = newValue
    }
  },
};

export const actions = {
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state);
  },

  signUp(
    { commit, dispatch, getters },
    { firstname, lastname, birthDate, email, password, confirmPassword } = {}
  ) {
    return axios
      .post(environment.USER_SIGNUP_URL, {
        firstname,
        lastname,
        birthDate,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        if (res.data.token) {
          const token = res.data.token;
          commit("setCurrentUser", token);
          return token;
        }
        return res.data;
      });
  },

  // Logs in the current user.
  logIn({ commit, dispatch, getters }, { email, password } = {}) {
    return axios
      .post(environment.USER_LOGIN_URL, { email, password })
      .then((res) => {
        if (res.data.token) {
          const token = res.data.token;
          commit("setCurrentUser", token);
        }
        return res.data;
      });
  },

  // Logs out the current user.
  logOut({ commit }) {
    window.localStorage.removeItem("authorization");
    commit("setCurrentUser", null);
  },
};

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common.Authorization = state.currentUser
    ? state.currentUser
    : "";
  // axios.defaults.withCredentials = true;
}
