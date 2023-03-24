<template>
    <body>
        <div class="navigators">
            <div class="row ">

                <!-- <button id="sort" @click="sortPrice">Price</button> -->
                <div class="sort col`">
                    <button class="btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Filter by:
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><button class="dropdown-item" @click="sortPrice">Price</button></li>
                    </ul>
                  </div>

            <div class="search col-1">
                <input class="filter-input" id="search" v-model="searching" type="text" placeholder="Search">
            </div>
           </div>


        </div>

        <div class="container">
            <SpinnerC v-if="isLoading"/>
            <div v-else>
             <div class="row d-flex flex-column flex-md-row"  v-if="filtering.length">
                    <div class="product-item g-5" v-for="product in filtering" :key="product.id" style="width: 18rem;">
                        <img :src="product.prodImg" class="card-img-top" >
                        <div class="card-body">
                          <h5 class="card-title">{{product.prodName}}</h5>
                          <div class="card-text">{{product.platform}}</div>
                          <div class="card-text">R{{product.price}}</div>
                          <div class="directors">
                          <!-- <a href="/Single.product" class="btn">View Item</a> -->
                          <router-link :to="{name:'single.product', params:{id:product.prodID}}"><a href="/Single.product" class="btn">View Item</a></router-link>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div id="waldo" v-else><img src="https://i.postimg.cc/MHtJDZPB/Amused-Quaint-Alleycat-max-1mb.gif">We can't find that one...</div>   
            </div>
        </div>
       
    
    </body>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/SpinnerC.vue';

export default {
    components: {
        SpinnerC
    },
    data(){
        return {
            isLoading: true,
            searching: ''
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
        let products = computed(() => this.$store.state.products)
        return{
            products,
        },
        { 
            sortBy: 'name',
            filterBy: 'all',
            searchQuery: '',
            platforms: ['Playstation', 'Xbox']
        }
    },
    computed: { 
        products() {
            return this.$store.state.products;      
        },
        filtering() {
            if(this.searching.trim().length > 0){
                return this.products.filter((name)=> name.prodName.toLowerCase().includes(this.searching.trim()))
            }
            return this.products
        }
},
    methods: {
        sortPrice(){
            this.$store.commit("sortProductsPrice");
            return this.$store.state.products
            }
        },
}


</script>

<style scoped>
body {
    padding-top: 100px;
    padding-bottom: 50px;
    background-image: url(https://i.postimg.cc/fLYPwK4K/wallpaper2you-374330.jpg);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    color: white; 
}

.card-img-top {
    height: 300px;
    padding-top: 5px;
    border-style: solid;
    border-color: white;
}

#waldo {
    padding-top: 150px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 50px;
    font-family: 'Press Start 2P', cursive;
}

#waldo img{
    height: 300px;
}

.navigators {
    display: flex;
    justify-content: space-evenly;
}

.directors {
    padding-bottom: 5px;
}
.btn {
    border-color: white;
    background-color: violet;
    color: white;
    width: 150px;
}

#filter{
    border-radius: 25px;
    border-color: white;
    background-color: black;
    color: white;
    font-family: 'Mynerve', cursive;
    height: 50px;
    width: 100px;
}

button #dropdownMenuButton{
    width: 100px;
}

.row {
    margin: auto;
    display: flex;
    justify-content: space-between;

}

.product-item{
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    font-weight: bolder;
    border-style: solid;
    border-width: 3px;
    border-color: white;
    transition: all 0.3s ease-in-out;
}

.product-item:hover {
    transform: scale(1.1);

}

.sort {
    justify-content: flex-start;
    border-radius: 25px;
    font-family: 'Press Start 2P', cursive;
    height: 50px;
    width: 100px;
}

.btn-secondary{
    border-color: white;
    border-radius: 10px;
    height: 50px;
    background-color: violet;
    color: white;
}

#search.filter-input{
    border-color: white;
    border-style: solid;
    border-radius: 10px;
    height: 50px;
    background-color: violet;
    color: white; 
}


#search {
    border-radius: 25px;
    border-color: white;
    background-color: black;
    color: white;
    font-family: 'Press Start 2P', cursive;
    height: 50px;
    width: 150px;
}

::placeholder {
    color: white;
}

input[type=text]:focus {
    width: 30%;
    -webkit-transition: width 0.15s ease-in-out;
    transition: width 0.15s ease-in-out;
}

input[type=text]:focus {
    width: 50%;
}
.navigators {
    align-items: center;
    justify-content: space-between;
    margin-right: 10%;
}

@media screen and (max-width: 720px) {

    header {
        width: 100%;
    }

    .product-item{
        width: 100%;
    }

    .container {
        width: 100%;
        justify-content: center;
        overflow: hidden;
    }
    .filter {
        width: 100%;
        overflow: hidden;
    }

    .sort {
        width: 100%;
        overflow: hidden;
    }

    .search{
        width: 100%;
        overflow: hidden;
    }

    img{
        width: 100%;
        justify-content: center;
        text-align: center;
    }


}    

    
</style>