import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYyLqcvO_-dI8zCHBgebISLJL6ej663Rc",
  authDomain: "hanghae-my-magazine.firebaseapp.com",
  projectId: "hanghae-my-magazine",
  storageBucket: "hanghae-my-magazine.appspot.com",
  messagingSenderId: "379176650523",
  appId: "1:379176650523:web:cde8b934812ffe209835be",
  measurementId: "G-VGJ7Q2SVJY",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
