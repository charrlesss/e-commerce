// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkftRPZw6JuAlVimpdqbNfiJRTQuzgIww",
  authDomain: "e-com-2c127.firebaseapp.com",
  projectId: "e-com-2c127",
  storageBucket: "e-com-2c127.appspot.com",
  messagingSenderId: "397447404545",
  appId: "1:397447404545:web:60a3f271a04b8d91f8f400",
  measurementId: "G-TRL340B2B3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const Fprovider = new FacebookAuthProvider();
const Gprovider = new GoogleAuthProvider();
export { auth, Fprovider ,Gprovider };
