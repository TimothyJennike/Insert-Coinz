<template>
    <div class="cart">
        <div class="table-responsive-md">
            <table class="table mx-5">
            <thead>
              <tr>
                  <th id="image" scope="col">Image</th>
                <th id="game" scope="col">Game</th>
                <th id="platform" scope="col">Platform</th>
                <th id="price" scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody v-for="product in updateCart" :key="product.cartID">
              <tr>
                <td><img :src="product.prodImg"></td>
                <td>{{product.prodName}}</td>
                <td>{{product.platform}}</td>
                <td>R{{product.price}}</td>
                <td><button id="delete" @click="removeFromCart(product.cartID)"><i class="bi bi-trash3"></i></button></td>
              </tr>
            </tbody>
          </table>
          <router-link to="/checkout"><button id="checkout">Go to Checkout</button></router-link>
          </div>

    </div>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        updateCart() {
            console.log(this.$store.state.cart)
           return this.$store.state.cart
        }
    },
    mounted() {
        this.$store.dispatch('fetchCart', this.id)
        console.log(this.id);
    },
    methods: {
      removeFromCart(id) {
        console.log(id);
        alert('Product deleted')
        this.$store.dispatch('removeFromCart', this.id)
    }
    }
}
</script>

<style scoped>

    .cart{
      background-color: black;
      min-height: 100vh;
      overflow: hidden;
    }

    th {
      font-family: 'Press Start 2P', cursive;
    }

    img{
        height: 120px;
        width: 120px
    }

    #checkout{
      margin-left: 40%;
      margin-bottom: 20px;
    }

    #checkout{
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

    #delete {
      text-align: center;
      display: inline-block;
      font-family: 'Press Start 2P', cursive;
      font-size: 10px;
      width: 2rem;
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

    #checkout a, #delete a{
      text-decoration: none;
      color: gray;
    }
    
    #checkout:active, #delete:active{
      box-shadow: none;
      position: relative;
      top: .2em;
    }

    table{
      color: white;
      font-size: larger;
    }

    i {
      color: black;
      font-size: large;
    }
</style>