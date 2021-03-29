import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBviBlYPcuGvW-IglRc2YntsaeTi4asJ1Q",
  authDomain: "auth-test-b9409.firebaseapp.com",
  databaseURL: "https://auth-test-b9409-default-rtdb.firebaseio.com",
  projectId: "auth-test-b9409",
  storageBucket: "auth-test-b9409.appspot.com",
  messagingSenderId: "378597606993",
  appId: "1:378597606993:web:e0aaf51336651a229dda70"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
})


require('firebase/auth');
require('firebase/database');
export const auth = app.auth()
export default app
