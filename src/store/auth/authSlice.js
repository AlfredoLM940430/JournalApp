import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        status: 'no-autenticado',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null 
     },
    reducers: { 
        login: (state, {payload}) => {
            state.status = 'autenticado';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, {payload}) => {
            state.status = 'no-autenticado';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        comprobandoCredenciales: (state) => {
            state.status = 'comprobando'
        },
     },
});

export const {login, logout, comprobandoCredenciales} = authSlice.actions;