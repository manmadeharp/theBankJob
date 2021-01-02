import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC73KBWKQlCZGgjQN8yuI__fULGN73BmGg",
  authDomain: "bankproject-7bc4e.firebaseapp.com",
  projectId: "bankproject-7bc4e",
  storageBucket: "bankproject-7bc4e.appspot.com",
  messagingSenderId: "750246563607",
  appId: "1:750246563607:web:f1eb5290a61604de9af152",
  databaseURL: "https://bankproject-7bc4e.firebaseio.com",
  measurementId: "G-K8P6GMS82S"
};

firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
