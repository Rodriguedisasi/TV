
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf8ZPDZ3DKJ3SnsIz8_C4yh4f6llrAQdc",
  authDomain: "rodss-tv.firebaseapp.com",
  projectId: "rodss-tv",
  storageBucket: "rodss-tv.firebasestorage.app",
  messagingSenderId: "655307123750",
  appId: "1:655307123750:web:2fb8e5671c989d627fcae7",
  measurementId: "G-ESKC6LTH7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);