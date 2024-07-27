// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8v8n35dPtiH45XHvFcLtFR3sEcypg43U",
  authDomain: "product-9090d.firebaseapp.com",
  projectId: "product-9090d",
  storageBucket: "product-9090d.appspot.com",
  messagingSenderId: "1012444933308",
  appId: "1:1012444933308:web:92d8311aee1e74c83d34b9"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export {auth}