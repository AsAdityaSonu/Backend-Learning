import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from "firebase/auth";

function Auth() {

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='auth'>
            <p>Sign In with Google to continue</p>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    );
}

export default Auth;