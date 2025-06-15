import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: { text: "" },
  reducers: {
    setFilterAction: (state, { payload }) => {
      state.text = payload;
    },
  },
});

export const { setFilterAction } = slice.actions;
export const filterReducer = slice.reducer;
