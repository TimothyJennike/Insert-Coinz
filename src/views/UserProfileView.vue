<template>
      <section>
        <div class="row d-flex flex-column flex-md-row">
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
                <button class="deleteAccount" @click="deleteAccount(user.userID)">Delete Account</button>
                <h3>OR</h3>
                <button id="update" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#updateModal' + `${user.userID}`">
                  Update
                </button>
                <!-- Modal -->
                <div class="modal fade" :id="'updateModal' + `${user.userID}`" tabindex="-1" aria-labelledby="updateModal" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="updateModal">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form @submit.prevent="updateUser">
                        <div class="form-outline mb-4">
                          <input type="text" id="form3Example1cg" placeholder="Firstname" required class="form-control form-control-lg" v-model="user.firstName"/>
                        </div>
            
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" placeholder="Lastname" required class="form-control form-control-lg" v-model="user.lastName"/>
                      </div>
          
                      <div class="form-outline mb-4">
                        <input type="tel" id="form3Example2cg" placeholder="Cellphone Number" required class="form-control form-control-lg" v-model="user.cellphoneNumber"/>
                      </div>
          
                      <div class="form-outline mb-4">
                        <input type="email" id="form3Example2cg" placeholder="Email Address" class="form-control form-control-lg" v-model="user.emailAdd"/>
                      </div>
          
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example2cg" placeholder="Gender" class="form-control form-control-lg" v-model="user.gender" />
                      </div>
          
                      <div class="form-outline mb-4">
                        <input type="URL" id="form3Example3cg" placeholder="Profile Profile"  required class="form-control form-control-lg" v-model="user.userProfile" />
                      </div>
                            
                      <div class="d-flex justify-content-center">
                        <button type="submit"
                        class="btn bg-success btn-block btn-lg gradient-custom-4 text-body" >Update</button>
                      </div>
          
                      
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </form>
                      </div>
                      <div class="modal-footer">
                      </div>
                    </div>
                  </div>
                </div>            
            </div>
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
  updateUser: function(user) {
    return this.$store.dispatch('updateUser', {
      userID: user.userID,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      cellphoneNumber: user.cellphoneNumber,
      userProfile: user.userProfile,
      userPaswrd: user.userPaswrd,
      emailAdd: user.emailAdd,
    })   
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
    height: 70%;
}

h3{
  font-family: 'Press Start 2P', cursive;
  font-size: small;
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
.deleteAccount, #update{
    text-align: center;
    display: inline-block;
    color: black;
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
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
  
  .deleteAccount a, #update a{
    text-decoration: none;
    color: gray;
  }
  
  .deleteAccount:active {
      box-shadow: none;
      position: relative;
      top: .2em;
  }

  #update:active{
    box-shadow: none;
    position: relative;
    top: .2rem;
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

button#update:hover{
  background-color: green;
  color: white;
}

p{
    font-size: medium;
    font-family: 'Anton', sans-serif;
}

@media screen and (max-width: 720px) {
  .col-6{
    min-width: 100%;
    text-align: center;
  }

  h2, p{
    text-align: center;
    min-width: 100%;
    font-size: 20px;
  }

  .row{
    padding-bottom: 70px;
  }
}
    
</style>