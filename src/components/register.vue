<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {useRouter} from "vue-router";

const router = useRouter()
const  email = ref("");
const password = ref("");
const register = (e)=>{
  e.preventDefault()
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) =>{
        alert("successfully register")
        router.push('/feed')
      })
      .catch((error)=>{
        console.log(error);
        // alert(error.message)
      })


}
const googleSignIn = (e)=>{
  e.preventDefault()
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(),provider)
      .then((result) =>{
    console.log(result.user)
        router.push("/feed")
      })
      .catch((error)=>{

      })

}

</script>
<template>
  <h1>Create your account</h1>
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
    <button @click="register"  class="btn btn-primary btn-block mb-4">Register</button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>or sign up with:</p>

      <button @click="googleSignIn"  class="btn btn-secondary btn-floating mx-1">
        <i class="fab fa-google"> GOOGLE</i>
      </button>
    </div>
  </form>
  </div>
</template>
<style scoped>
h1{
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
}

</style>