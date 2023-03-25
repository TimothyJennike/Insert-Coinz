import { createStore } from 'vuex'
import { useCookies } from 'vue3-cookies'
import axios from 'axios'
const {cookies} = useCookies();

// const InsertCoins = 'https://insert-coinz.onrender.com/'
const InsertCoins = 'https://insert-coinz.onrender.com/'


export default createStore({
  state: {
    users: null,
    user: null || JSON.parse(localStorage.getItem('token')),
    products: null,
    product: null,
    message: null,
    asc: true,
    showSpinner: true,
    cart: null
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
      setPeople(state, people) {
        state.people = people
      },
      setMessage(state, values) {
        state.message = values
      },
      setToken(state, values) {
        state.token = values
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
      setCart(state, value) {
        state.cart = value
      }
  },
  actions: {
    async loginUser(context, payload) {
      const res = await axios.post(`${InsertCoins}login`, payload);
      const {result, jwt, err} = await res.data;
      if (result) {
        console.log(result);
        context.commit('setUser', result);
        context.commit('setToken', jwt);
        cookies.set('Legit', jwt,);
        cookies.set('userID', result.userID);
        console.log(result.userID);
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
    async createProduct(context, payload) {
      const res = await axios.post(`${InsertCoins}product`,payload)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      } else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context) {
      const res = await axios.get(`${InsertCoins}users`);
      console.log(await res.data)
      if(res.data !== undefined){
        context.commit('setUsers', res.data)
      } else {
        context.commit('setUsers', res.data)
      }
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${InsertCoins}user/${id}`);
      console.log(await res.data)
      if(res.data !== undefined){
        context.commit('setUser', res.data)
      } else {
        context.commit('setUser', res.data)
      }
    },
    // async updateUser(context, payload) {
    //   const res = await axios.post(`${InsertCoins}user`, payload);
    //   const {msg, err} = await res.data;
    //   if(msg) {
    //     context.commit('setUser', msg);
    //   } else {
    //     context.commit('setUser', err);
    //   }
    // },
    async fetchProducts(context) {
      const res = await axios.get(`${InsertCoins}products`);
      console.log(await res.data)
      if(res.data !== undefined){
        context.commit('setProducts', res.data)
      } else {
        context.commit('setProducts', res.data)
      }
    },
    async fetchProduct(context, id) {
      console.log(id)
      const res = await axios.get(`${InsertCoins}product/${id}`, {withCredentials: true});
      context.commit('setProduct', res.data)
      context.commit('setSpinner', false)
    },
    // async editProduct(context, {id, payload}) {
    //   const {res, message} = await axios.put(`${InsertCoins}product/${id}`, payload);
    //   console.log(id, payload);
    //   if(res) {
    //     context.commit('setProduct', res.data)
    //   } else {
    //     context.commit('setMessage', message)
    //   }
    // },
    async deleteUser({commit, dispatch}, id) {
      try {
        await axios.delete(`${InsertCoins}user/${id}`)
        commit('setMessage', 'User Deleted');
        dispatch('fetchUsers');
      } catch (error) {
        commit('setMessage', 'Unable to delete user')
      }
    },
    async deleteProduct({commit, dispatch}, id) {
      try {
        await axios.delete(`${InsertCoins}product/${id}`)
        commit('setMessage', 'Product Deleted');
        dispatch('fetchProducts');
      } catch (error) {
        commit('setMessage', 'Unable to delete product')
      }
    },
    async updateProduct(context, payload) {
      try {
        const response = await axios.put(`${InsertCoins}product/${payload.prodID}`, payload);
        console.log("Response: ", Response);
        alert('Product Updated')
        let {result, err} = await response.data;
        if (result) {
          context.commit("setUser", response.data);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser(context, payload) {
      try {
        const response = await axios.put(`${InsertCoins}user/${payload.userID}`, payload);
        console.log("Response: ", Response);
        alert('Product Updated')
        let {result, err} = await response.data;
        if (result) {
          context.commit("setUser", response.data);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCart(context, id) {
      console.log(id);
      const result = await axios.get(`${InsertCoins}user/${id}/carts`);
      context.commit('setCart', await result.data)
    },
    async addToCart(context, {userID, payload}) {
      console.log(userID, payload);
      const {res, message} = await axios.post(`${InsertCoins}user/${userID}/cart`, payload);
      if(res) {
        context.commit('setCart', res.data)
      } else {
        context.commit('setMessage', message)
      }
    },
  },
  async removeFromCart({commit, dispatch}, id) {
    try {
      await axios.delete(`${InsertCoins}user/${id}/cart`)
      commit('setMessage', 'Removed from Cart');
      dispatch('fetchCart');
    } catch (error) {
      commit('setMessage', 'Unable to remove from Cart')
    }
  },
  async clearCart(context, userID) {
    const {res, message} = await axios.delete(`${InsertCoins}user/${userID}/cart/`);
    if(res) {
      context.commit('setCart', await res.data)
    } else {
      context.commit('setMessage', message)
    }
  },
  modules: {
  }
})
