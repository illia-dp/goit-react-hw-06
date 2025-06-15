import { createSlice } from "@reduxjs/toolkit";
import { contact } from "../assets/contact";

const slice = createSlice({
  name: "contacts",
  initialState: { items: contact, currentContact: null },
  reducers: {
    addContactAction: (state, { payload }) => {
      state.items.push(payload);
    },
    delteContactAction: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
  },
});

export const { addContactAction, delteContactAction } = slice.actions;
export const contactsReducer = slice.reducer;
