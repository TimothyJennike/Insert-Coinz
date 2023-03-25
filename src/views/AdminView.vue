<template>
    <div class="admin-crud">
        <!-- <h2>Admin Page</h2> -->
      <div class="container">
        <h3>Products</h3>
        <SpinnerC v-if="isLoading" />
        <div v-else>
          <div class="table-responsive-md">
            <table class="table mx-5">
            <thead>
              <tr>
                <th id="id" scope="col">Id</th>
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
                <td>{{product.prodID}}</td>
                <td>{{product.prodName}}</td>
                <td>{{product.platform}}</td>
                <td>R{{product.price}}</td>
                <td>{{product.quantity}}</td>
                <td><img :src="product.prodImg"></td>
                <td><button id="delete" @click="deleteProduct(product.prodID)"><i class="bi bi-trash3"></i></button></td>
                <td>
                <button id="update" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#updateModal' + `${product.prodID}`">
                  Update
                </button>
                <!-- Modal -->
                <div class="modal fade" :id="'updateModal' + `${product.prodID}`" tabindex="-1" aria-labelledby="updateModal" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="updateModal">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form @submit.prevent="updateProduct">
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
                        class="btn bg-success btn-block btn-lg gradient-custom-4 text-body" >Update</button>
                      </div>
          
                      
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </form>
                      </div>
                      <div class="modal-footer">
                      </div>
                    </div>
                  </div>
                </div>            
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          
    <button type="button" class="newProd" data-bs-toggle="modal" data-bs-target="#createProd">
      Create a new Product
    </button>

        <!-- Modal -->
      <div class="modal fade" id="createProd" tabindex="-1" aria-labelledby="createProd" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="createProd">Create a new Product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    

            <form @submit.prevent="newProduct">

              <div class="form-row">
                <input type="URL" id="form3Example1cg" placeholder="Game Image" required class="form-control form-control-lg" v-model="product.prodImg"/>
              </div>
  
            <div class="form-row">
              <input type="text" id="form3Example1cg"  placeholder="Name" required class="form-control form-control-lg" v-model="product.prodName"/>
            </div>

            <div class="form-row">
              <input type="text" id="form3Example2cg" placeholder="Description" required class="form-control form-control-lg" v-model="product.prodDescription"/>
            </div>

            <div class="form-row">
              <input type="text" id="form3Example2cg" placeholder="Platform" class="form-control form-control-lg" v-model="product.platform"/>
            </div>

            <div class="form-row">
              <input type="text" id="form3Example2cg" placeholder="Year Released" class="form-control form-control-lg" v-model="product.yearReleased" />
            </div>

            <div class="form-row">
              <input type="number" id="form3Example3cg" placeholder="Price" required class="form-control form-control-lg" v-model="product.price" />
            </div>

            <div class="form-row">
              <input type="text" id="form3Example4cg" placeholder="Developed By" required class="form-control form-control-lg" v-model="product.developedBy" />
            </div>

            <div class="form-row">
              <input type="number" id="form3Example4cg" placeholder="Quantity" required class="form-control form-control-lg" v-model="product.quantity" />
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
          <div class="table-responsive-md">
            <table class="table mx-5">
            <thead>
              <tr>
                <th id="game" scope="col">Name</th>
                <!-- <th scope="col">Lastname</th> -->
                <th id="email" scope="col">Email Address</th>
                <th scope="col">Gender</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody v-for="users in user" :key="users">
              <tr>
                <td>{{users.firstName}} {{users.lastName}}</td>
                <!-- <td>{{users.userProfile}}</td> -->
                <td>{{users.emailAdd}}</td>
                <td>{{users.gender}}</td>
                <td><button id="delete" @click="deleteUser(users.userID)"><i class="bi bi-trash3"></i></button></td>
                <td><button id="update" ><i class="bi bi-pen"></i></button></td>
              </tr>
            </tbody>
          </table>

          </div>

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
        // store.dispatch("editProduct");
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
   updateProduct: function(product) {
    return this.$store.dispatch('updateProduct', {
      prodID: product.prodID,
      prodName: product.prodName,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      prodImg: product.prodImg,
      prodDescription: product.prodDescription,
      developedBy: product.developedBy,
      yearReleased: product.yearReleased
    })   
  },
  deleteUser(id) {
    this.$store.dispatch('deleteUser', id)
  },
  deleteProduct(id) {
    this.$store.dispatch('deleteProduct', id)
  }},
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

.modal-content{
  margin-top: 150px;
  z-index: -1;
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

#id {
  letter-spacing: 2px;
  color: black;
}

#image, #email {
  color: black;
}

i {
  color: black;
}

.newProd {
  margin-left: 10%;
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

  h3{
    font-size: x-large;
  }
  .table-responsive-md{
    width: 100%;
  }

  button{
    width: 100%;
  }

  th{
    color: black;
  }
  button .newProd{
    justify-items: center;
    margin: auto;
  }
}

</style>