
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGbiy04HBgDIugFks51FGRJ3x0brlB5jI",
  authDomain: "am-oficial.firebaseapp.com",
  projectId: "am-oficial",
  storageBucket: "am-oficial.appspot.com",
  messagingSenderId: "790235731261",
  appId: "1:790235731261:web:9222ac458547a3891b2154",
  measurementId: "G-HDNV1PT0M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };