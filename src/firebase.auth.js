import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDsLFIZAKwJV9SSNso0BvUyaE9rFIAEpCE",
  authDomain: "dining-management-adc0f.firebaseapp.com",
  projectId: "dining-management-adc0f",
  storageBucket: "dining-management-adc0f.appspot.com",
  messagingSenderId: "665623201274",
  appId: "1:665623201274:web:f0d7a156e71c652bb61043",
  measurementId: "G-KDL8C6MZVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;