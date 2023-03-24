<template>
      <section>
        <div class="row">
            <div class="col-6" v-if="user">
                <img :src="user.userProfile" alt="profile pic">
            </div>
            <div class="col-6">
                <h2>Name:</h2>
                <p>{{user.firstName}} {{user.lastName}}</p>
                <h2>Email:</h2>
                <p>{{user.emailAdd}}</p>
                <h2>Gender:</h2>
                <p>{{user.gender}}</p>
                <h2>Cellphone Number:</h2>
                <p>{{user.cellphoneNumber}}</p>
            </div>
                <button class="deleteAccount" @click="deleteAccount(user.userID)">Delete Account</button>
        </div>
      </section>


</template>
<script>

export default {
  props: ['id'],
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user
    },
  },
  created(){
    console.log();
  },
  mounted() {
    console.log(this.id);
    this.$store.dispatch('fetchUser', this.id)
  },
  methods: {
    deleteAccount(id) {
    this.$store.dispatch('deleteUser', id)
    alert('Your Account has been deleted')
  },
  }
}
</script>

<style scoped>

section {
    background-image: url(https://i.postimg.cc/X72YR0dB/1050408.jpg);
    min-height: 90vh;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden; 
}

.row{
    margin-top: 150px;
    margin-left: 25%;
    width: 50%;
}

img{
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
}
.col-6 {
    background-color: white;
    color: black;
}
.deleteAccount{
    text-align: center;
    display: inline-block;
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    margin-left:475px;
    margin-top: 20px;
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
  
  .deleteAccount a{
    text-decoration: none;
    color: gray;
  }
  
  .deleteAccount:active {
      box-shadow: none;
      position: relative;
      top: .2em;
  }


h2{
    font-size: x-large;
    font-family: 'Press Start 2P', cursive;
    text-decoration: underline violet;
    margin-top: 16px;
}

button:hover{
    background-color: crimson;
    color: white;
}

p{
    font-size: medium;
    font-family: 'Anton', sans-serif;
}
    
</style>