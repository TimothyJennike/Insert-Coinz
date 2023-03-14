<template>
    <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-12">
                    <div class="card-body p-md-5 mx-md-4">
      
                      <div class="text-center">
                        <h4 class="mt-1 mb-5 pb-1">Insert<img src="https://i.postimg.cc/htRB5JbR/png-clipart-computer-icons-slot-machine-coin-slot-game-angle-thumbnail.png"> Coinz</h4>
                      </div>
      
                      <form submit.prevent="loginCredentials">
                        <p>Please login to your account</p>
      
                        <div class="form-outline">
                            <label class="form-label" for="form2Example11">Username</label>
                          <input type="email" id="form2Example11" class="form-control"
                            placeholder="Email address" v-model="login.emailAdd"/>
                        </div>
      
                        <div class="form-outline">
                            <label class="form-label" for="form2Example22">Password</label>
                          <input type="password" id="form2Example22" class="form-control" v-model="login.userPaswrd"/>
                        </div>
      
                        <div class="text-center pt-1 mb-5 pb-1">
                          <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" @click.prevent="loginCredentials">Log
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
// import { useCookies } from "vue3-cookies";

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
    // setup() {
    //     const { cookies } = useCookies();
    //     return { cookies }
    // },

    // mounted() {
    //     let my_cookie_value = this.cookies.get("legit");
    //     console.log(my_cookie_value);
    //     return { my_cookie_value };
    // }
}

</script>

<style scoped>

section{
    background-image: url(https://i.postimg.cc/SKfqbyQ1/Lo-U2-background-window.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.container{
    background-color: transparent;
    width: 700px;
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

#register{
    background-color: #d8363a;
    border-color: black;
    font-family: 'Press Start 2P', cursive;
}

#register a{
    text-decoration: none;
    color: black;
}

.gradient-custom-2 {
    /* fallback for old browsers */
    background: #fccb90;
    
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    }
    
    @media (min-width: 768px) {
    .gradient-form {
    height: 100vh !important;
    }
    }
    @media (min-width: 769px) {
    .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    }
    }   
</style>