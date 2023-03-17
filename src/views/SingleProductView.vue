<template>
    <div class="single-product" v-if="product">
      <SpinnerC v-if="isLoading" />
      <div v-else>
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
              <div>
                <h4>{{product.prodName}}</h4>
              </div>
            </div>
        </div>
      </div>
        
    </div>
</template>
<script>
import {useStore} from 'vuex';
import SpinnerC from '../components/SpinnerC.vue'
import {computed} from '@vue/runtime-core';

export default {
    // computed: {
    //     product() {
    //       console.log(this.$store.state.product);
    //         return this.$store.state.product;
    //     }
    // },
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
        this.$store.dispatch("fetchProduct", this.$route.params.id)
        console.log(this.$route.params.prodID);
    }
    
}
</script>

<style scoped>

.single-product{
    color: black;
    overflow: hidden;
}

.carousel-inner{
  height: 100%;
}

img{
  height: 500px;
  margin-top: 100px;
  margin-left: 50px;
}
    
</style>