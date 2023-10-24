
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: { 
        isSaving: false,
        messageSve : '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     titulo: '',
        //     body: '',
        //     date: '1234567',
        //     imageUrls: [],
        // }
     },
    reducers: {
        SavingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSve = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSve = '';
        },
        UpdateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map((note) => {
                if(note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });

            state.messageSve = `${action.payload.title} actualizada correctamente`;
        },
        setPhotosNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
            console.log(state.active.imageUrls);
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSve = '';
            state.notes = [];
            state.active = null;
        },
        DeleteNote: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
    },
});

export const {addNewEmptyNote, setActiveNote, setNotes, setSaving, UpdateNote, DeleteNote, SavingNewNote, setPhotosNote, clearNotesLogout} = journalSlice.actions;