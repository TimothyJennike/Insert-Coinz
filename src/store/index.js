import { createStore } from 'vuex'
import axios from 'axios'

const InsertCoins = 'https://insert-coinz.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    message: null,
    asc: true,
    showSpinner: true
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, values) {
      state.user = values
    },
      setProducts(state, values) {
        state.products = values
      },
      setProduct(state, values) {
        state.product = values
      },
      setSpinner(state, values) {
        state.showSpinner = values
      },
      setMessage(state, values) {
        state.message = values
      },
      sortProductsPrice: (state) => {
        state.products.sort((a, b) => {
          return a.price - b.price;
        });
        if (!state.asc) {
          state.products.reverse()
        }
        state.asc = !state.asc
      },
  },
  actions: {
    async loginUser(context, payload) {
      const res = await axios.post(`${InsertCoins}login`, payload);
      const {result, err} = await res.data;
      if (result) {
        context.commit('setUser', result);
      } else {
        context.commit('setMessage', err)
      }
    },
    async registerUser(context, payload) {
      const res = await axios.post(`${InsertCoins}register`, payload)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      } else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context, payload) {
      const res = await axios.get(`${InsertCoins}users`, payload);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setUsers', msg);
      } else {
        console.log(err);
        context.commit('setMessage', err);
      }
    },
    async updateUser(context, payload) {
      const res = await axios.post(`${InsertCoins}user`, payload);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setUser', msg);
      } else {
        context.commit('setUser', err);
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${InsertCoins}products`);
      console.log(await res.data)
      if(res.data !== undefined){
        context.commit('setProducts', res.data)
      } else {
        context.commit('setProducts', res.data)
      }
    },
    async fetchProduct({commit}, id) {
      const res = await axios.get(`${InsertCoins}product/${id}`);
      console.log(await res.data);
      commit('setProduct', await res.data)
    }
  },
  modules: {
  }
})
