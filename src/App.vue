<template>
  <nav>
    <Navbar />
    <SpinnerC v-if="isLoading"/>
    <div v-else>
    <router-view/>
    </div>
    <Footer />
  </nav>
</template>

<script>

import Navbar from './components/NavbarC'
import SpinnerC from './components/SpinnerC.vue'
import  Footer from './components/FooterC'

export default {
  components:{
    Navbar,
    SpinnerC,
    Footer
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
}

</script>


<style>

nav a.router-link-exact-active {
  color: violet;
}
</style>
