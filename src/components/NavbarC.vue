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
            </div>
              <div class="right">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person-square"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </div>
            </ul>
          </div>
        </div>
      </nav>
</template>
<script>
export default {
    
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
    font-size: 20px;
    margin-top: 20px;
}

.d-flex li a:hover{
  color: violet;
}

.right {
  display: flex;
  margin-left: auto;
}

i.bi {
    color: whitesmoke;
    margin-left: auto;
}
.right a{
 margin-left: 1000%;
}

.right .dropdown-menu {
  margin-left: 800%;
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