<script setup>
import {ref , onMounted} from 'vue'
import  {getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import {useRouter}from 'vue-router'
const isloggedIn  = ref(false)
const router = useRouter()
let auth;
 onMounted(()=>{
   auth = getAuth();
   onAuthStateChanged(auth,(user)=>{
     if (user){
       isloggedIn.value = true;

     }
     else {
       isloggedIn.value = false;
     }
   })
 })
const signout =()=>{
   signOut(auth).then(()=>{
     router.push('/home')
   })
}

</script>

<template>
  <div class="navigation">
  <nav>
    <router-link class="route" to="/">Home</router-link>
    <router-link  class="route" to="/feed">Feed</router-link>
    <router-link  class="route" to="/register">Register</router-link>
    <router-link class="route" to="/signup">Sign In</router-link>
    <button @click="signout" v-if="isloggedIn"  class="btn btn-primary">Sign out</button>
  </nav>
  </div>
<router-view />
</template>

<style scoped>
.navigation{
  display: flex;
  align-items: center;
  justify-content: center;

}
.route{
  margin: 10px;
  font-family: Calibri,serif;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
}
nav{
  margin-top: 3%;
}
</style>
