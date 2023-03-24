<template>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
            <img src="https://i.postimg.cc/hvyPztXY/coin-mario.gif">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div class="d-flex">
                <li class="nav-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/products">Products</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact">Contact</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/admin">Admin</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/login">Login</router-link>
                </li>
                <li class="nav-item" v-if="user">
                  <router-link :to="`/userprofile/${user.userID}`">Profile</router-link>
                </li>
                <li class="nav-item-cart" v-if="user">
                  <router-link :to="`/user/${user.userID}/cart`">Cart</router-link>
                </li>
            </div>
            </ul>
          </div>
        </div>
      </nav>
</template>
<script>

import Cookies from 'js-cookie'

export default {
  props: ['id'],
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  mounted(){
    const userID = Cookies.get('userID', {path: '/'})
    this.$store.dispatch('fetchUser', userID)
  }
    
}
</script>

<style>

img {
    height: 50px;
}
.navbar {
    background-color: black;
    opacity: 0.9;
    height: 80px;
    font-family: 'Press Start 2P', cursive;
    font-size: 30px;
    box-shadow: 0px -10px 10px 0px rgba(0, 0, 0, 0.5)
}
.d-flex li a {
    display: flex;
    color: whitesmoke;
    text-decoration: none;
    font-size: 15px;
    margin-top: 20px;
}

.nav-item-2 {
  margin-left: 40rem;
}

.d-flex li a:hover{
  color: violet;
}

.bi {
    color: whitesmoke;
    margin-left: 100%;
}

.bi.bi {
  display: flex;
  justify-content: flex-end;
}


li{
  color: black;
}
.d-flex li{
  padding: 5px;
}



@media screen and (min-width:720px){

  .d-flex {
    width: 100%;
    text-align: center;
  }

  .right {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  ul{
    width: fit-content;
    overflow: hidden;
  }
}


</style>