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
                <td><button id="delete" @submit.prevent="deleteProduct">Delete</button></td>
                <td><button id="update" >Update</button></td>
              </tr>
            </tbody>
          </table>
          <!-- <button id="newProd">Create a new Product</button> -->
          <!-- Button trigger modal -->
    <button type="button" class="newProd" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Create a new Product
    </button>

        <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new Product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    

            <form @submit.prevent="newProduct">

              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1cg">Game Image</label>
                <input type="URL" id="form3Example1cg" required class="form-control form-control-lg" v-model="product.prodImg"/>
              </div>
  
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example1cg">Game Name</label>
              <input type="text" id="form3Example1cg" required class="form-control form-control-lg" v-model="product.prodName"/>
            </div>

            <div class="form-outline mb-4">
              <label id="form-label" for="form3Example2cg">Description of Game</label>
              <input type="text" id="form3Example2cg" required class="form-control form-control-lg" v-model="product.prodDescription"/>
            </div>

            <div class="form-outline mb-4">
              <label id="form-label" for="form3Example2cg">Platform</label>
              <input type="text" id="form3Example2cg" class="form-control form-control-lg" v-model="product.platform"/>
            </div>

            <div class="form-outline mb-4">
              <label id="form-label" for="form3Example2cg">Year released</label>
              <input type="text" id="form3Example2cg" class="form-control form-control-lg" v-model="product.yearReleased" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3cg">Price</label>
              <input type="number" id="form3Example3cg" required class="form-control form-control-lg" v-model="product.price" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example4cg">Developed By</label>
              <input type="text" id="form3Example4cg" required class="form-control form-control-lg" v-model="product.developedBy" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example4cg">Quantity</label>
              <input type="number" id="form3Example4cg" required class="form-control form-control-lg" v-model="product.quantity" />
            </div>

            <div class="d-flex justify-content-center">
              <button type="submit"
              class="btn bg-success btn-block btn-lg gradient-custom-4 text-body" >Create</button>
            </div>

            
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            
          </form>

    </div>
  </div>
</div>

            <h3 id="users">Users</h3>

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
            <tbody v-for="users in user" :key="users">
              <tr>
                <td>{{users.firstName}}</td>
                <td>{{users.lastName}}</td>
                <td>{{users.emailAdd}}</td>
                <td>{{users.gender}}</td>
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
      product: {
        prodName: '',
        prodImg: '',
        prodDescription: '',
        platform: '',
        yearReleased: '',
        price: '',
        developedBy: '',
        quantity: ''
      }
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
computed: {
        user() { 
          return this.$store.state.users
        }
},
methods: {
  async newProduct() {
    await this.$store.dispatch('createProduct', this.product);
    this.product.prodName = '';
    this.product.prodDescription = '';
    this.product.platform = '';
    this.product.prodImg = '';
    this.product.yearReleased = '';
    this.product.price = '';
    this.product.developedBy = '';
    this.product.quantity = '';
  },
  async deleteProduct() {
    await this.$store.dispatch("deleteProduct", this.$route.params.id)
  }
},
// mounted() {
//   this.$store.dispatch("deleteProduct", this.$route.params.id)
// } 
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

h1{
  margin-left: 9rem;
}

#users{
  padding-top: 50px;
}

td{
    background-color: white;
    opacity: 0.9;
    text-align: center;
}

.newProd {
  margin-left: 40%;
  text-align: center;
  display: inline-block;
  font-family: 'Press Start 2P', cursive;
  width: 18rem;
  font-weight: bold;
  padding: 10px 0 10px 10px ;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  -webkit-border-radius: 7px;
-moz-border-radius: 7px;
-o-border-radius: 7px;
border-radius: 7px;
  box-shadow: 0 .2em gray; 
  cursor: pointer;
}

.newProd {
  text-decoration: none;
  color: gray;
}

.newProd:active {
	box-shadow: none;
	position: relative;
	top: .2em;
}

#game {
    color: black;
    padding-left: 190px;
}

#platform, #price, #quan {
  color: black;
}

img {
  height: 80px;
  width: 80px;
  border-color: black;
  border-style: solid;
}

input{
  border-style: solid;
  border-color: black;
}

input:focus{
  background-color: violet;
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