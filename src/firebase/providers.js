import {  signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googgleProvider = new GoogleAuthProvider();

export const singGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googgleProvider);
        // const credenciales = GoogleAuthProvider.credentialFromResult(result);
        // console.log({credenciales}); 
        const {displayName, email, photoURL, uid} = result.user
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // console.log(error);
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserEmail = async ({email, password, displayName}) => {

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const loginWithEmailPassword = async ({email, password}) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = resp.user;
        return{
            ok: true,
            uid, photoURL, displayName
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }

}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}