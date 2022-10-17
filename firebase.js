import firebase from "firebase/compat";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm56r7LanbUCWJBeJ6qgqlBNIPcPG73o0",
  authDomain: "signalapp-f915a.firebaseapp.com",
  projectId: "signalapp-f915a",
  storageBucket: "signalapp-f915a.appspot.com",
  messagingSenderId: "1023356337290",
  appId: "1:1023356337290:web:35f915faca77f83c548173"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const dp = app.firestore();
const auth = firebase.auth();

export { dp, auth };
