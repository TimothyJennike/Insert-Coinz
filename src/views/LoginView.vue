<template>
    <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100 ">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-12">
                    <div class="card-body p-sm-5 mx-md-4">
      
                      <div class="text-center">
                        <h4 class="mt-1 mb-5 pb-1">Insert<img src="https://i.postimg.cc/htRB5JbR/png-clipart-computer-icons-slot-machine-coin-slot-game-angle-thumbnail.png"> Coinz</h4>
                      </div>
      
                      <form submit.prevent="loginCredentials">
                        <p>Please login to your account</p>
      
                        <div class="form-outline">
                            <label class="form-label" for="form2Example11">Email Address</label>
                          <input type="email" id="form2Example11" class="form-control"
                            placeholder="Email address" required v-model="login.emailAdd"/>
                        </div>
      
                        <div class="form-outline">
                            <label class="form-label" for="form2Example22">Password</label>
                          <input type="password" required placeholder="Password" id="form2Example22" class="form-control" v-model="login.userPaswrd"/>
                        </div>
      
                        <div class="text-center pt-1 mb-5 pb-1">
                          <button id="logbtn" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" @click.prevent="loginCredentials">Log
                            in</button>
                        </div>
      
                        <div class="d-flex align-items-center">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button id="register" type="button" class="btn btn-outline-danger"><router-link to="/register">Click Here</router-link></button>
                        </div>
      
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
import { useCookies } from "vue3-cookies";

export default {
    data() {
        return {
            login: {
                emailAdd: '',
                userPaswrd: ''
            }
        }
    },
    methods: {
        async loginCredentials() {
            await this.$store.dispatch('loginUser', this.login);
            this.login.emailAdd = '',
                this.login.userPass = ''
        }
    },
    setup() {
        const { cookies } = useCookies();
        return { cookies }
    },

    mounted() {
        let my_cookie_value = this.cookies.get("legit");
        console.log(my_cookie_value);
        return { my_cookie_value };
    }
}

</script>

<style scoped>

section{
    background-image: url(https://i.postimg.cc/T30SrhHJ/world-serpent-of-god-of-war-iexcn4u59wiro78f.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

input {
  color: black;
}
.container{
    width: 700px;
    opacity: 0.8;
}

h4{
    text-decoration: underline violet;
}

p{
    font-family: "Press Start 2P", cursive;
    text-decoration: underline violet;
}

input{
    border-color: black;
    border-style: solid 5px;
}
.btn {
    text-decoration: none;
}

#logbtn{
  background-color: violet;
  border-color: black;
  font-family: 'Press Start 2P', cursive;
  color: black; 
  margin-top: 20px;
}

form input:focus{
  background-color: rgb(247, 162, 247);
}

#register{
    background-color: #d8363a;
    border-color: black;
    font-family: 'Press Start 2P', cursive;
}

#register a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 720px) {
  .card-body{
    width: 100%;
    overflow: hidden;
  }
} 


</style>