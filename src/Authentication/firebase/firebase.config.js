import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLYltMwlyBNTGmEmG_Xvk7ejx1GTDrTMg",
  authDomain: "job-portal-1d15b.firebaseapp.com",
  projectId: "job-portal-1d15b",
  storageBucket: "job-portal-1d15b.firebasestorage.app",
  messagingSenderId: "314094525552",
  appId: "1:314094525552:web:ad14f19c8ff5cb79bd68b5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
