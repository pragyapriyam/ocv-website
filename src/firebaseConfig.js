// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvgj4pzamsPvREAzyO4zJuOSuU-y5qaro",
  authDomain: "ocv-website.firebaseapp.com",
  projectId: "ocv-website",
  storageBucket: "ocv-website.appspot.com",
  messagingSenderId: "268520489606",
  appId: "1:268520489606:web:01552700906f4f0dc98707",
  measurementId: "G-CXMBG08T95",
  databaseURL : "https://ocv-website-default-rtdb.firebaseio.com"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase

