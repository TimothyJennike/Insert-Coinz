<template>
    <div class="single-product container-fluid" v-if="product">
      <SpinnerC v-if="isLoading" />
      <div v-else>
            <div class="row d-flex flex-column flex-md-row">
            <div class="col-6 col-md-6">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img :src="product.imgCarousal1" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img :src="product.imgCarousal2" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img :src="product.imgCarousal3" class="d-block w-100">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
            <div class="col-6 col-md-6">
              <div class="Information">
                <h4>Name: {{product?.prodName}}</h4>
                <h4>Released: {{product?.yearReleased}}</h4>
                <h4>Description: {{product?.prodDescription}}</h4>
                <h4>Platform: {{product?.platform}}</h4>
                <h4>Developed by: {{product?.developedBy}}</h4>
                <h4>Quantity: {{product?.quantity}}</h4>
                <h4>Price: R{{product?.price}}</h4>
                <button id="Cart" @click="addToCart(product)">Add to Cart</button>
              </div>
            </div>
        </div>
        <router-link to="/products"><button id="return">Return to products</button></router-link>
      </div>
        
    </div>
</template>
<script>
import {useStore} from 'vuex';
import SpinnerC from '../components/SpinnerC.vue'
import {computed} from '@vue/runtime-core';
import Cookies from 'js-cookie'

export default {
    // computed: {
    //     product() {
    //       console.log(this.$store.state.product);
    //         return this.$store.state.product;
    //     }
    // },
    props: ['id'],
    components: {
      SpinnerC
    },
    data() {
      return {
        isLoading: true,
      }
    },
    created(){
      setTimeout(()=> {
        this.isLoading =false;
      }, 2000);
    },
    setup(){
      const store = useStore();
      const product = computed(() => store.state.product);
      return {
        product
      }
    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.id)
        console.log(this.id);
    },
    methods: {
      async addToCart(product) {
        const userID = Cookies.get('userID', );
        console.log(userID, product.prodID);
        this.$store.dispatch('addToCart', {
          userID: userID,
          payload: {
            userID: userID,
            prodId: product.prodID
          }
        })
      },
      removeFromCart(id) {
    this.$store.dispatch('removeFromCart', id)
  }
    }  
}
</script>

<style scoped>

.single-product{
    color: black;
    overflow: hidden;
    min-height: 100vh;
    background-image: url(https://i.postimg.cc/hjGCx5zc/d0e0e259bf0aba4da742bedff1d4b8a5.gif);
    background-repeat: no-repeat;
    background-size: cover;
}

img{
  height: 500px;
  margin-top: 100px;
  margin-left: 50px;
  border-style: solid 10px;
  border-color: white;
}

.Information{
  padding-top: 100px;
  margin-left: 10px;
  color: whitesmoke;
}

carousal-item.active {
  border-style: solid;
  border-color: white;
}

h4{
  font-size: x-large;
  color: whitesmoke;
  margin-bottom: 1rem;
  opacity: 0.9;
}

#return{
  text-align: center;
  display: inline-block;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  margin-left:200px;
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

#Cart {
  text-align: center;
  display: inline-block;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
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

i {
  color: black;
}

#return a, #Cart a{
  text-decoration: none;
  color: gray;
}

#return:active, #Cart:active {
	box-shadow: none;
	position: relative;
	top: .2em;
}


@media screen and (max-width: 720px){
  .col-6{
    width: 100%;
    height: auto;
    text-align: center;
    justify-content: center;
    overflow: hidden;
  }
  

  button #Cart{
    position: absolute;
  }
  .Information{
    height: 100%;
    text-align: center;
  }
}
    
</style>