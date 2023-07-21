import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyADE93z9jzxmSRA2pv8MvlCQm10ZX8B6cU",
  authDomain: "sabor-divino-tienda-vino.firebaseapp.com",
  projectId: "sabor-divino-tienda-vino",
  storageBucket: "sabor-divino-tienda-vino.appspot.com",
  messagingSenderId: "685740404702",
  appId: "1:685740404702:web:e48b1922b307bf4c1a374f"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);