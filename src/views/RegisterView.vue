<template>
    <div>
        <section class="vh-50 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px;">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>
      
                    <form @submit.prevent="registerInformation" role="form">
      
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" required data-error="Enter your Name" class="form-control form-control-lg" v-model="register.firstName"/>
                        <label class="form-label" for="form3Example1cg">Your Name</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example2cg" required class="form-control form-control-lg" v-model="register.lastName"/>
                        <label id="form-label" for="form3Example2cg">Your Surname</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="tel" id="form3Example2cg" class="form-control form-control-lg" v-model="register.cellphoneNumber"/>
                        <label id="form-label" for="form3Example2cg">Your Cellphone Number</label>
                      </div>

                      <div class="col-md-6 mb-4">
                        <h6 class="mb-2 pb-1">Gender:</h6>
    
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="Female" checked v-model="register.gender" />
                          <label class="form-check-label" for="femaleGender">Female</label>
                        </div>
    
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="Male" v-model="register.gender" />
                          <label class="form-check-label" for="maleGender">Male</label>
                        </div>
                      </div>
    
                      <div class="form-outline mb4">
                        <input type="URL" id="form3Example2cg" class="form-control form-control-lg" v-model="register.userProfile" />
                        <label id="form-label" for="form3Example2cg">Profile Picture</label>
                      </div>

      
                      <div class="form-outline mb-4">
                        <input type="email" id="form3Example3cg" required class="form-control form-control-lg" v-model="register.emailAdd" />
                        <label class="form-label" for="form3Example3cg">Your Email</label>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="password" id="form3Example4cg" required class="form-control form-control-lg" v-model="register.userPaswrd" />
                        <label class="form-label" for="form3Example4cg">Password</label>
                      </div>
            
                      <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                        </label>
                      </div>
      
                      <div class="d-flex justify-content-center">
                        <button type="submit"
                        class="btn btn-block btn-lg gradient-custom-4 text-body" >Register</button>
                      </div>
      
                      <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="../views/LoginView.vue"
                          class="fw-bold text-body"><router-link to="/login"><u>Login here</u></router-link></a></p>
      
                    </form>
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </div>
</template>
<script>

export default {
    data() {
    return {
      register: {
        firstName: '',
        lastName: '',
        cellphoneNumber: '',
        emailAdd: '',
        userProfile: '',
        userPaswrd: '',
      }
    }
  },
  methods: {
    async registerInformation() {
      await this.$store.dispatch('registerUser', this.register);
        this.register.firstName = '';
        this.register.lastName = '';
        this.register.cellphoneNumber = '';
        this.register.emailAdd = '';
        this.register.userProfile = '';
        this.register.userPaswrd = '';
        alert('Successfully registered'),
        this.$router.push('/login')
    }
  },
}
</script>
<style scoped>

section{
    padding-top: 30px;
    padding-bottom: 30px;
    background-image: url(https://i.postimg.cc/rsVRHGWz/background-cover-3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

h2{
    font-family: 'Press Start 2P', cursive;
    text-decoration: underline violet;
    color: black;
    font: bolder;
}

.container{
    opacity: 0.9;
}

input{
    border-color: black;
    border-style: solid 2px;
}

button{
    background-color: violet;
    color: black;
    border-color: black;
    font-family: 'Press Start 2P', cursive;
}

</style>