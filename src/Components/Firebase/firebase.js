import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/storage'; 

const firebaseConfig = {
        apiKey: "AIzaSyAy2INjsb45EQ54degeTG-0fpDJZXhcinU",
        authDomain: "instagram-clone-73109.firebaseapp.com",
        projectId: "instagram-clone-73109",
        storageBucket: "instagram-clone-73109.appspot.com",
        messagingSenderId: "143630568290",
        appId: "1:143630568290:web:0cb14fb96e4aadd81afa3b",
        measurementId: "G-8PYM44NV5K"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage().ref();

export { db, auth, storage };
