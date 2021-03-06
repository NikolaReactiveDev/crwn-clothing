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

export const createUserPorfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch  = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();

}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google OAuth setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case I want whole library
export default firebase;
