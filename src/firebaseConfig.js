import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENCER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
const auth = getAuth(app);

export const login = async ({email, password})=>{
  let res = await signInWithEmailAndPassword(auth, email, password);
  return res;
}

export const register = async({email, password})=>{
  let res = await createUserWithEmailAndPassword(auth, email, password)
  return res;
}

//Proveedor de google
const googleProvider = new GoogleAuthProvider();
export const loginWithGoogle = async ()=>{
  let res = await signInWithPopup(auth, googleProvider)
  return res;
}