<template>
    <div class="admin-crud">
        <!-- <h2>Admin Page</h2> -->
      <div class="container">
        <h3>Products</h3>
        <SpinnerC v-if="isLoading" />
        <div v-else>
        <table class="table mx-5">
            <thead>
              <tr>
                <th id="game" scope="col">Game</th>
                <th id="platform" scope="col">Platform</th>
                <th id="price" scope="col">Price</th>
                <th id="quan" scope="col">Quantity</th>
                <th id="image" scope="col">Image</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product">
              <tr>
                <td>{{product.prodName}}</td>
                <td>{{product.platform}}</td>
                <td>R{{product.price}}</td>
                <td>{{product.quantity}}</td>
                <td><img :src="product.prodImg"></td>
                <td><button id="delete">Delete</button></td>
                <td><button id="update" >Update</button></td>
              </tr>
            </tbody>
          </table>

          <table class="table mx-5">
            <thead>
              <tr>
                <th id="game" scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email Address</th>
                <th scope="col">Gender</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user.firstName">
              <tr>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.emailAdd}}</td>
                <td>{{user.gender}}</td>
                <td><button id="delete">Delete</button></td>
                <td><button id="update" >Update</button></td>
              </tr>
            </tbody>
          </table>

          </div>
          <br>
        </div> 
    </div>

</template>
<script>

import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/SpinnerC.vue'

export default {
    components: {
    SpinnerC
  },
  data(){
    return {
      isLoading: true,
      user: null,
    }
  },
  created(){
    setTimeout(()=> {
      this.isLoading = false;
    },2000);
  },
  setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        store.dispatch("fetchUsers");
        let users = computed(() => store.state.users)
        let products = computed(() => store.state.products)
        return{
            products,
            users
        }   
},
// computed: {
//         product() {
//             return this.$store.state.products
//         },
//         user() { 
//           return this.$store.state.users
//         }
// },
}
</script>

<style scoped>
.admin-crud {
    padding-top: 150px;
    font-family: 'Anton', sans-serif;
    margin: auto;
    background-image: url(https://i.postimg.cc/SRkpXh3X/star-wars-jedi-fallen-order-11.jpg);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    color: black;
}

table {
  border-color: black;
  color: black;
  font-size: large;
}

th{
    color: white;
    font-size: 25px;
    text-decoration: underline;
}

td{
    background-color: white;
    opacity: 0.9;
    text-align: center;
}

#game {
    color: black;
    padding-left: 190px;
}

#platform {
  color: black;
}

img {
  height: 80px;
  width: 80px;
  border-color: black;
  border-style: solid;
}

h2 {
    font-size: 80px;
    text-align: center;
}

h3 {
  font-size: 50px;
  text-align: center;
  text-decoration: underline;
  font-family: 'Press Start 2P', cursive;
  color: black;
}

#delete {
  color: black;
 font-size: 17px;
 background-color: rgba(252, 166, 252, 0.904);
 border: 1px solid black;
 border-radius: 5px;
 padding: 10px;
 box-shadow: 0px 6px 0px rgb(224, 107, 224);
 transition: all .1s;
 margin-top: 20px;
}

#delete:active {
  box-shadow: 0px 2px 0px rgb(224, 107, 224);
  position: relative;
  top: 2px;
}

#update {
  color: black;
  font-size: 17px;
  background-color: rgba(152, 46, 152, 0.751);
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 6px 0px rgba(208, 84, 208, 0.925);
  transition: all .1s;
  margin-top: 20px; 
}

#update:active{
  box-shadow: 0px 2px 0px rgba(208, 84, 208, 0.925);
  position: relative;
  top: 2px;
}

@media screen and (max-width: 720px) {
        .table{
          width: 100%;
          overflow: hidden;
        }
}

</style>