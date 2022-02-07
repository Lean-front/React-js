import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAt7q2O4ogTu-2gQKmqmU95sWtOjUgQmJs",
    authDomain: "tecnoshop-6bc69.firebaseapp.com",
    projectId: "tecnoshop-6bc69",
    storageBucket: "tecnoshop-6bc69.appspot.com",
    messagingSenderId: "213787205769",
    appId: "1:213787205769:web:69b7d11d9b895a04076658"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}