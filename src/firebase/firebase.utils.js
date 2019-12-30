import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqCAH_b0x0w1gDLBXEFyuFUbpMccj9oDw",
  authDomain: "crwn-db-c7a53.firebaseapp.com",
  databaseURL: "https://crwn-db-c7a53.firebaseio.com",
  projectId: "crwn-db-c7a53",
  storageBucket: "crwn-db-c7a53.appspot.com",
  messagingSenderId: "911885581183",
  appId: "1:911885581183:web:dc718c4140d83770b9f84a",
  measurementId: "G-67WWCTHMHZ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
      console.log("error creating user", error.message);
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
