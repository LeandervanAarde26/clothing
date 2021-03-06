import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInwithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB6MMuBnD_1NU_NCWEWNseH4VzSz0bTqKo",
  authDomain: "clothing-db-39af5.firebaseapp.com",
  projectId: "clothing-db-39af5",
  storageBucket: "clothing-db-39af5.appspot.com",
  messagingSenderId: "408821042213",
  appId: "1:408821042213:web:a665d85d8ea64fb672c3cc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionReference = collection(database, collectionKey);
  const batch = writeBatch(database);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionReference, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();

}

export const getCategoriesAndDocuments = async () => {
  const collectionReference = collection(database, 'categories');
  const q = query(collectionReference);
  const querySnap = await getDocs(q);
  const categoryMap = querySnap.docs.reduce((accumulator, docSnap) => {
    const { title, items } = docSnap.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});

  return categoryMap;
}

export const createUserAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(database, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  //Check if user data exists, if it does return the userDoc reference
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (err) {
      console.log('error creating the user', err.message)
    }
  }
  //If it does not exists , create/set the document. 
  return userDocRef;
};

export const createAuthuserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback); 