import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAamAE8werhSbWqv1eSqRyOkBgy_OHQ1hc",
  authDomain: "pro1-f0a5a.firebaseapp.com",
  projectId: "pro1-f0a5a",
  storageBucket: "pro1-f0a5a.firebasestorage.app",
  messagingSenderId: "987852245108",
  appId: "1:987852245108:web:d6d42b03b39c3d930ee921"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let getSBTN=document.getElementById('s-button')
let getLBTN=document.getElementById('l-button')
if(getSBTN){
    getSBTN.addEventListener('click',()=>{
        let email=document.getElementById('s-email').value
        let password=document.getElementById('s-password').value
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    })
}
if(getLBTN){
    getLBTN.addEventListener('click',()=>{
        let email=document.getElementById('l-email').value
        let password=document.getElementById('l-password').value
})