<template>
  <body>
        <div class="Home">
          <header>
            <h2 class="inserty">Insert~Coinz</h2>
          </header>
            <div class="StreetF">
              <img src="https://i.postimg.cc/x1YdgWPd/ryu-hdstance.gif" alt="ryu">
              <button id="btn"><a href="/login">Start</a></button>
              <img id="Ken" src="https://i.postimg.cc/25SQHzRk/ezgif-com-rotate.gif" alt="Ken">
            </div>
          <div>
          </div>
  </div>
  </body>
</template>
<script>
export default {
  
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Mynerve&family=Press+Start+2P&family=Rubik+Iso&display=swap');

body{
  min-height: 100vh;
  position: relative;
  background-image: url(https://i.postimg.cc/rpfWTxc6/12-sfback07.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

h2{
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  font-size: 70px;
  color: #fff;
  position: absolute;
  top: 10%;
  cursor: pointer;
  left: 50%;
  transform: translate(-50%,-50%);
  letter-spacing: 4px;
  color: #6b3b6e;
  text-shadow: 0 0 5px #ec41bf, 0 0 10px #8606b6, 0 0     15px #fff, 0 0 20px #921982, 0 0 25px #770067;
  -webkit-text-fill-color: #F4ECFF;
  -webkit-text-stroke-color: #C546F7;
  -webkit-text-stroke-width: 0;
  text-decoration:none;
}

.inserty{
  animation-name: inserty;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  -webkit-animation-name:inserty;
  -webkit-animation-duration: 3s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}

@-moz-keyframes inserty{
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes inserty {
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
   100% { opacity: 1.0; }
}

@keyframes inserty {
  0% { opacity: 1.0; }
   50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}

.StreetF {
  margin-top: 400px;
  display: flex;
  justify-content: space-around;
}

img{
  height: 400px;
}


h4 {
  margin-top: 150px;
  color: black;
  text-align: center;
  font-size: xx-large;
}

#btn{
  position:relative;
  display:inline-block;
  margin:20px;
}

#btn a{
  color:white;
  font-family:'Press Start 2P', cursive;
  font-weight:bold;
  font-size:36px;
  text-align: center;
  text-decoration:none;
  background-color:#FFA12B;
  display:block;
  position:relative;
  padding:20px 40px;
  
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

#btn a:active{
  top:10px;
  background-color: rgb(201, 105, 3);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
}

#btn:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

#btn[data-v-9ea40744] {
  background-color: transparent;
  border: none;
}


@media screen and (max-width: 720px) {
  body {
    width: 100%;
    text-align: center;
  }

  h2{
    width: 200px;
    font-size: small;
    text-align: center;
    overflow: hidden;
  }

  img{
    display: none;
  }

  #btn{
    margin-top: 75%;
  }


}

  
</style>