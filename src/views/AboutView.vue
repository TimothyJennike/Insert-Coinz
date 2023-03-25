<template>
  <div class="about">
    <div class="row d-flex flex-column flex-md-row">
      <div class="col-12">
        <h2>Who are we?</h2><br>
        <p> We are web-page that is passionate about selling YOU quality, affordable and the latest video games AFTER we give you more than enough details about your chosen game!</p><br />        
          <p>Click the button below to view our latest stock</p>
          <div class='product-btn'><router-link to="/products">PRODUCTS</router-link></div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  
.about{
  background-image: url(https://i.postimg.cc/zvgdcFST/Lo-U2-background-window.png);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;
}

.col-12{
  padding-top: 150px;
  margin-left: 30px;
  color: whitesmoke;
}

h2{
  text-decoration: underline;
  font-family: 'Press Start 2P';
  margin-right: 50%;
}

p{
  display: block;
  width: 50%;
  color: white;
  font-size: xx-large;
}

.product-btn{
  text-align: center;
  display: inline-block;
  font-family: 'Press Start 2P', cursive;
  font-size: 30px;
  margin-right:50%;
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

.product-btn a{
  text-decoration: none;
  color: gray;
}

.product-btn:active {
	box-shadow: none;
	position: relative;
	top: .2em;
}

@media screen and (max-width: 720px) {
  .col-12{
    min-height: 100vh;
  }






}

</style>