<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img src="https://i.postimg.cc/ZKzSQhWF/pngwing-com-1.png" alt="">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
              <div class="d-flex">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-circle"></i>
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

<style scoped>

img {
    height: 80px;
}
.navbar {
    background-color: white;
    height: 70px;
    opacity: 0.9;
    font-family: 'Mynerve', cursive;
    font-size: 30px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
}
a {
    color: black;
    text-decoration: none;
    font-size: 30px;
}

.right {
  display: flex;
  justify-content: end;
}

a:hover {
  color: crimson;
}

button {
  background-color: crimson;
}

i.bi {
    color: black;
}



.bi-person-circle {
    color: white;
}
</style>