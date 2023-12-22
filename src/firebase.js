// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpoxKfPod2tyuW4rPZfGagWEAkx1C1zmE",
    authDomain: "byizak-915e7.firebaseapp.com",
    projectId: "byizak-915e7",
    storageBucket: "byizak-915e7.appspot.com",
    messagingSenderId: "21532476242",
    appId: "1:21532476242:web:5015bd0606709f3f88b08b",
    measurementId: "G-FEQWPPHXXD",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export { auth, db };
