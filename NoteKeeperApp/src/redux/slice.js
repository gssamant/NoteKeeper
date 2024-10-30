import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  pastes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {},
    updateNote: (state, action) => {},
    resetNote: (state, action) => {},
    deleteNote: (state, action) => {},
  },
});

export const { addNote, updateNote, resetNote, deleteNote } =
  noteSlice.actions;

export default noteSlice.reducer;
