<template>
    <div>
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
                <td><button id="delete" @click="deleteProduct(product.prodID)"><i class="bi bi-trash3"></i></button></td>
              </tr>
            </tbody>
          </table>
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
    }
}
</script>

<style scoped>
    img{
        height: 120px;
        width: 120px
    }
</style>