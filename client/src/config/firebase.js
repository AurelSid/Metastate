// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYHt5qVuHRmQmc85zk5Vj_ZT9fPhzpmIM",
  authDomain: "etherzon-5864d.firebaseapp.com",
  projectId: "etherzon-5864d",
  storageBucket: "etherzon-5864d.appspot.com",
  messagingSenderId: "900977706076",
  appId: "1:900977706076:web:7d48e77f1de9a9c71c1299",
  measurementId: "G-27GBE9LMG3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
