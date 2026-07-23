import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB17d8uGNA5ABbCtL3m2YFnf5KSucevPA",
  authDomain: "mm-traders-2026.firebaseapp.com",
  projectId: "mm-traders-2026",
  storageBucket: "mm-traders-2026.firebasestorage.app",
  messagingSenderId: "1020011318639",
  appId: "1:1020011318639:web:aa3c5bc46e85567eecac9a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);