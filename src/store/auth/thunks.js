import { loginWithEmailPassword, logoutFirebase, registerUserEmail, singGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { comprobandoCredenciales, login, logout } from "./authSlice"

export const checandoAutenticacion = (email, password) => {
    return async (dispatch) => {

        dispatch(comprobandoCredenciales());

    }
}

export const startGoogleSign = () => {
    return async (dispatch) => {

        dispatch(comprobandoCredenciales());
        const result = await singGoogle();
        if (!result.ok) return dispatch (logout(result.errorMessage));

        dispatch(login(result));
    }
}

export const starCreatingUser = ({email, password, displayName}) => {

    return async(dispatch) => {
        dispatch(comprobandoCredenciales());
        const {ok, uid, photoURL, errorMessage} = await registerUserEmail({email, password, displayName});
        console.log(ok);

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}));
    }
}

export const starLogin = ({email, password}) => {

    return async(dispatch) => {
        dispatch(comprobandoCredenciales());

        const result = await loginWithEmailPassword({email, password});
        console.log(result);

        if (!result.ok) return dispatch (logout(result));

        dispatch(login(result));


    }
}

export const starLogout = () => {
    return async(dispatch) => {
        
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout());

    }
}