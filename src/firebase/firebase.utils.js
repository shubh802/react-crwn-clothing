import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBiIEwAPf8TIamF1BfT4AwIRm9rqrIcolo",
  authDomain: "crwn-db-e920a.firebaseapp.com",
  databaseURL: "https://crwn-db-e920a.firebaseio.com",
  projectId: "crwn-db-e920a",
  storageBucket: "crwn-db-e920a.appspot.com",
  messagingSenderId: "828533048652",
  appId: "1:828533048652:web:2d2b496d3469c61db17be9",
  measurementId: "G-DYH7BDPY54"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Check if the user from auth is present in the db
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
