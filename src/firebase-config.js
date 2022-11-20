// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj8JdYTx_dYPu_3nJhVIWQIfaW0At5yM0",
    authDomain: "horta-viva-web.firebaseapp.com",
    projectId: "horta-viva-web",
    storageBucket: "horta-viva-web.appspot.com",
    messagingSenderId: "954219938271",
    appId: "1:954219938271:web:830d829c9507eee624446a",
    measurementId: "G-L42BLWFKNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);