
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
  //  import { getFirestore, setDoc, addDoc, doc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyD8LJu2-xqE-tRLno-T9MvdPFzL7LwkFEg",
      authDomain: "nbase-dbd7d.firebaseapp.com",
      projectId: "nbase-dbd7d",
      storageBucket: "nbase-dbd7d.appspot.com",
      messagingSenderId: "1024335331907",
      appId: "1:1024335331907:web:6e76e4e7f46d204e518af6"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const authistic = getAuth(app);

    const signupform = document.querySelector('#signup-form');
    signupform.addEventListener('submit',(e) => {
      e.preventDefault();



      const email = signupform['signup-email'].value;                                                 //document.getElementById("signup-email").value
      const password = signupform['signup-password'].value;                                             //document.getElementById("signup-password").value
  
  
      createUserWithEmailAndPassword(authistic, email, password)
      .then((userCredential) => {
              // Signed in 
      const user = userCredential.user;
      const nunModel = document.querySelector('#modal-signup');
      M.Modal.getInstance(nunModel).close();
      signupform.reset();  
      console.log("Created")
    })
    
              // ... 
    })



    // document.getElementById("buttonDes").addEventListener('click', (e) => {
    // e.preventDefault();
    // const email = document.getElementById("signup-email").value
    // const password = document.getElementById("signup-password").value


    // createUserWithEmailAndPassword(authistic, email, password)
    // .then((userCredential) => {
    //         // Signed in 
    // const user = userCredential.user;

    // console.log("Created")
    //         // ...
    // })
    // .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode + errorMessage);
    //         // ..
    //     });
    // })
   // const db = getFirestore(app);
  //  db.settings({timestampsInSnapshot: true});
   
// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});




const logOutf = document.querySelector('#logout');
logOutf.addEventListener('click', (e) => {
  e.preventDefault();
  authistic.signOut().then(()=> {
    console.log("user out");
  })

})



// -----------------------------------------login------------------------------------

const logInf = document.querySelector('#login-form');

logInf.addEventListener('submit', (e) => {

  e.preventDefault();
  const email = logInf['login-email'].value;                                                 //document.getElementById("signup-email").value
  const password = logInf['login-password'].value; 

  signInWithEmailAndPassword(authistic, email, password)
  .then((cred)=>{
    console.log(cred.user);
    const nunModel = document.querySelector('#modal-login');
    M.Modal.getInstance(nunModel).close();
    logInf.reset();  
  })

})


onAuthStateChanged(authistic,(user) => {
  if(user){
    console.log("user is logged in as :", user);
  } else{
    console.log("sign out");
  }
  
});