import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDJVfyIDwFBJVD5Q9m68KrxRObjNj3yXfo",
  authDomain: "pluto-15cbd.firebaseapp.com",
  projectId: "pluto-15cbd",
  storageBucket: "pluto-15cbd.appspot.com",
  messagingSenderId: "847547387642",
  appId: "1:847547387642:web:fa1dbaaf7f28011b8c4343",
  measurementId: "G-B71G3LQ073"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)
export const storage = getStorage(app)
