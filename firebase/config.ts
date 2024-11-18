// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw3KoNbC5NsRfWPbf8vYP0MVCuJvZdMrw",
  authDomain: "codernext-app-910ec.firebaseapp.com",
  projectId: "codernext-app-910ec",
  storageBucket: "codernext-app-910ec.appspot.com",
  messagingSenderId: "914060921082",
  appId: "1:914060921082:web:15dc69f14c57f5130da143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
export const storage = getStorage(app)
export const auth= getAuth(app)