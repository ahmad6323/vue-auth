import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import "bootstrap/dist/css/bootstrap.css"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBsBbEs1SNIvibYG8ROiFWqdmURU29sB5Y",
    authDomain: "auth-74934.firebaseapp.com",
    projectId: "auth-74934",
    storageBucket: "auth-74934.appspot.com",
    messagingSenderId: "434974879829",
    appId: "1:434974879829:web:cd8dfca054441f089724dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
