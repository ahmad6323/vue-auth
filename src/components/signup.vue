<script setup>
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {useRouter} from "vue-router";

const router = useRouter()
const  email = ref("");
const password = ref("");
const errMsg = ref("")
const register = (e)=>{
  e.preventDefault()
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) =>{
        alert("successfully sign in ")
        router.push('/home')
      })
      .catch((error)=>{
        console.log(error);
        switch (error.code){
          case "auth/invalid-email":
            errMsg.value = "invalid email"
                break;
          case "auth/user-not-found":
            errMsg.value = "no account with that  email"
            break;
          case "auth/wrong-password":
            errMsg.value = "incorrect password"
            break;
          default:
            errMsg.value = "email or password was incorrect"
            break;
        }
        // alert(error.message)
      })


}
const googleSignIn = ()=>{

}


</script>
<template>
  <h1>Sign In your account</h1>
  <div class="form" style="display: flex;
align-items: center;justify-content: center">
    <form style="width: 30%;">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input  v-model="email" type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">Email address</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input v-model="password" type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>
      <p v-if="errMsg" >{{errMsg}}</p>
      <button @click="register"  class="btn btn-primary btn-block mb-4">Sign In</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>or sign up with:</p>

        <button @click="googleSignIn"  class="btn btn-secondary btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
h1{
  text-align: center;
  margin-bottom: 3%;
}

</style>