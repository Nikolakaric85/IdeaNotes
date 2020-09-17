import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCCWEE_0uZpSM3Z8C8AxFg0WC0fNeNuN5Y",
  authDomain: "dex2-acae9.firebaseapp.com",
  databaseURL: "https://dex2-acae9.firebaseio.com",
  projectId: "dex2-acae9",
  storageBucket: "dex2-acae9.appspot.com",
  messagingSenderId: "897694745814",
  appId: "1:897694745814:web:83ad19158caf698569b577",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
