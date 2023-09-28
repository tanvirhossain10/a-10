// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQy1M3AvCeKEFrsbUg55x7y9ICc4kamv4",
    authDomain: "gym-trainer-403fd.firebaseapp.com",
    projectId: "gym-trainer-403fd",
    storageBucket: "gym-trainer-403fd.appspot.com",
    messagingSenderId: "245740165577",
    appId: "1:245740165577:web:851cc0df403bcb1e55f018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;