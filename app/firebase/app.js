import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkcHsViS8aX73-_wxlR3KyMYxHE1lhMC0",
  authDomain: "is-website-2024.firebaseapp.com",
  projectId: "is-website-2024",
  storageBucket: "is-website-2024.appspot.com",
  messagingSenderId: "478183729004",
  appId: "1:478183729004:web:186ccdebceae494d647549",
  measurementId: "G-0FG9FY8HF3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
