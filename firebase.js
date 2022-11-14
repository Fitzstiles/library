import { initializeApp } from "firebase/app";
import "firebase/auth";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjxsq0MMk4hd8QjNE9YJbf60ePSuSy25k",
  authDomain: "library-f0991.firebaseapp.com",
  projectId: "library-f0991",
  storageBucket: "library-f0991.appspot.com",
  messagingSenderId: "877350646124",
  appId: "1:877350646124:web:bbf0efbcb2ed517220c349",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
