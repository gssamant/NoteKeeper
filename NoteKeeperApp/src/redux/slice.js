import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {

    addNote: (state, action) => {
      const note = action.payload;
      // check if title already exists
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast("Created successfully");
    },

    updateNote: (state, action) => {
      const note = action.payload;
      const index = state.notes.findIndex((item) => item._id === note._id)

      if (index >= 0) {
        state.notes[index] = note
        localStorage.setItem("notes", JSON.stringify(state.notes))
        toast.success("Note updated")
      }
    },

    resetAll: (state, action) => {
      state.notes = []
      localStorage.removeItem("notes");
    },

    deleteNote: (state, action) => {
      const noteID = action.payload;
      // console.log(noteID);
      const index = state.notes.findIndex((item) => item._id === noteID);

      if (index >= 0) {
        state.notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(state.notes));
        toast.success("Note deleted");
      }
    },
  },
});

export const { addNote, updateNote, resetAll, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
