<template>
    <div class="single-product" v-if="product">
        <div class="row">
            <div class="col-6">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img :src="product.prodImg" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img :src="product.prodImg" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img :src="product.prodImg" class="d-block w-100">
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
            <div class="col-6">

            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.userID)
    }
    
}
</script>

<style scoped>

.single-product{
    background-color: yellow;
    color: black;
}
    
</style>