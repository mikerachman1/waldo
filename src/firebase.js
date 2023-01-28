import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeZkVLydkeH6IuFi1LzUj1F-R6udFIrSM",
  authDomain: "waldo-66e46.firebaseapp.com",
  projectId: "waldo-66e46",
  storageBucket: "waldo-66e46.appspot.com",
  messagingSenderId: "1092461110521",
  appId: "1:1092461110521:web:6ab8893332250b6eaa2e28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;