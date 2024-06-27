// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBom6E_HkKNKXkaib1-juQHjFTQDfToERk",
  authDomain: "chat-app-35f35.firebaseapp.com",
  projectId: "chat-app-35f35",
  storageBucket: "chat-app-35f35.appspot.com",
  messagingSenderId: "843130686214",
  appId: "1:843130686214:web:e56a760e4f663ae6df2c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ------------------ Export ------------------
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();