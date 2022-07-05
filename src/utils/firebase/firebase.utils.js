import {initializeApp } from 'firebase/app';
import {getAuth, signInwithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
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

  export const createUserAuth = async (userAuth) =>{
        const userDocRef = doc(database, 'users', userAuth.uid);
       

        const userSnapShot = await getDoc(userDocRef);
        console.log(userSnapShot);
        console.log(userSnapShot.exists());
        //Check if user data exists, if it does return the userDoc reference
        if(!userSnapShot.exists()){
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try{
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt
                })
            } catch (err){
                console.log('error creating the user', err.message)
            } 
        }
        //If it does not exists , create/set the document. 
        return userDocRef;
  };

