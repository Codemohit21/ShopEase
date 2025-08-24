import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "onecart-46c15.firebaseapp.com",
  projectId: "onecart-46c15",
  storageBucket: "onecart-46c15.firebasestorage.app",
  messagingSenderId: "334230743544",
  appId: "1:334230743544:web:9a58c80569f844026b4e0d",
  measurementId: "G-RCT38LLN67"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

