import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdDLK1XvbTHqiT9q8I2BEz9ss-hekg4dM",
  authDomain: "hasanprotfolio.firebaseapp.com",
  projectId: "hasanprotfolio",
  storageBucket: "hasanprotfolio.firebasestorage.app",
  messagingSenderId: "168175851140",
  appId: "1:168175851140:web:83a0884b70363f86af14d1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);