
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBepx_BsB5ZgRqWdZuFhF6pFYw2Do7VQLg",
  authDomain: "email-829ab.firebaseapp.com",
  projectId: "email-829ab",
  storageBucket: "email-829ab.appspot.com",
  messagingSenderId: "932875612401",
  appId: "1:932875612401:web:915e89f7232512ad19b950",
  measurementId: "G-9B0CMT7GXG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;