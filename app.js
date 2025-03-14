import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
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
        let email=document.getElementById('s-email')
        let password=document.getElementById('s-password')
        createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: "Good job!",
          text: "You Signed Up",
          icon: "success",
          width: "60%",
          position:"center"
        })
        .then((data)=>{
          email.value=''
          if(data.isConfirmed){
            location.href='login.html'
          }
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorCode,
          width: "60%",
          position:"center"
        })
      });
    })
}
if(getLBTN){
    getLBTN.addEventListener('click',()=>{
        let email=document.getElementById('l-email')
        let password=document.getElementById('l-password')

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    Swal.fire({
      title: "Good job!",
      text: "You Logged In",
      icon: "success",
      width: "60%",
      position:"center"
    })
    .then((data)=>{
      if(data.isConfirmed){
        email.value=''
        location.href='welcome.html'
      }
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorCode,
      width: "60%",
      position:"center"
    })
  });
})
}