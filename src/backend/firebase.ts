// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBybloyDVpG8Ea_5zCWw4Hu4YnF29RDRg4",
  authDomain: "money-watch-d26d2.firebaseapp.com",
  projectId: "money-watch-d26d2",
  storageBucket: "money-watch-d26d2.appspot.com",
  messagingSenderId: "525170671578",
  appId: "1:525170671578:web:b2846b58e7df0adc640ae3",
  measurementId: "G-PBM1CXF3DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add Auth support
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
