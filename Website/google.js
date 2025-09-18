  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBVZeJ6YkfVxvMjVHWjVTWAzrXNA6DvKfs",
    authDomain: "login-first-92796.firebaseapp.com",
    projectId: "login-first-92796",
    storageBucket: "login-first-92796.firebasestorage.app",
    messagingSenderId: "415942400953",
    appId: "1:415942400953:web:3c30fdfe5a054e8aa1b468"
  };

  const app=initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode= 'en'
  const provider = new GoogleAuthProvider();

    const googleLoginBtn = document.getElementById('google-login-btn');
    googleLoginBtn.addEventListener("click", function(){
        signInWithPopup(auth, provider)
        .then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "../Home/index.html";

        })
        .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
        });
    })