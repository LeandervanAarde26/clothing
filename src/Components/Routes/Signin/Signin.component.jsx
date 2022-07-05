import React from 'react';
import { signInWithGooglePopup, createUserAuth} from "../../../utils/firebase/firebase.utils";

export const Signin = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        createUserAuth(user)
        console.log(user)
        const userDocRef = await createUserAuth();
        console.log(user)
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    );
};

