import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALZ5U4sEmsNenL8WE2d8IkiNIyK7ecKaA",
  authDomain: "hackaton-94660.firebaseapp.com",
  databaseURL: "https://hackaton-94660-default-rtdb.firebaseio.com",
  projectId: "hackaton-94660",
  storageBucket: "hackaton-94660.appspot.com",
  messagingSenderId: "355569090139",
  appId: "1:355569090139:web:d428453a391ad1ba63c97e",
  measurementId: "G-HGRMCCH5XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);