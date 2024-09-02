// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpTitA2NoN2eGfrEpb7snNJG8FKCblOjI",
  authDomain: "firebasic-7ff81.firebaseapp.com",
  databaseURL: "https://firebasic-7ff81-default-rtdb.firebaseio.com",
  projectId: "firebasic-7ff81",
  storageBucket: "firebasic-7ff81.appspot.com",
  messagingSenderId: "719383897098",
  appId: "1:719383897098:web:9194fdea20b887b306abf3",
  measurementId: "G-WCZLD2D837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);