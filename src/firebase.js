import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCzLgVgnZYsP5JvRLgD2e09t1sQHIUZixw",
    authDomain: "clone-a0bac.firebaseapp.com",
    projectId: "clone-a0bac",
    storageBucket: "clone-a0bac.appspot.com",
    messagingSenderId: "129306321510",
    appId: "1:129306321510:web:2e06da107cd8e568eec3a7",
    measurementId: "G-8PT7VK3J76"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth  = firebase.auth();

export {db , auth} ;