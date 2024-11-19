
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV-8KxHAMbjwQv5179WYzGN-FCYaFDNC0",
  authDomain: "react-authentication-efb44.firebaseapp.com",
  projectId: "react-authentication-efb44",
  storageBucket: "react-authentication-efb44.firebasestorage.app",
  messagingSenderId: "805584701759",
  appId: "1:805584701759:web:857b4276ec438585bd6b8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;