import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZtQBx79vBwLjAaavlTJNQAslEMOJNCV8",
    authDomain: "crwn-clothing-db-cfa5a.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-cfa5a.firebaseio.com",
    projectId: "crwn-clothing-db-cfa5a",
    storageBucket: "crwn-clothing-db-cfa5a.appspot.com",
    messagingSenderId: "427754497546",
    appId: "1:427754497546:web:3cfa89438b52011cba61f3"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google OAuth setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case I want whole library
export default firebase;
