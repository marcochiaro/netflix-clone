import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmr5SLoyKrwbVHHBqDbVG3Hbavb_9lEEs",
  authDomain: "netflix-clone-redux-1e3b6.firebaseapp.com",
  projectId: "netflix-clone-redux-1e3b6",
  storageBucket: "netflix-clone-redux-1e3b6.appspot.com",
  messagingSenderId: "690213645977",
  appId: "1:690213645977:web:8e6a8852aa50a77ba0d208",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
