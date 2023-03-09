<template>
  <nav>
    <Navbar />
    <router-view/>
    <Footer />
  </nav>
</template>

<script>

import Navbar from './components/NavbarC'
import  Footer from './components/FooterC'

export default {
  components:{
    Navbar,
    Footer
  }
}

</script>


<style>

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
