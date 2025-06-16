import { createSlice } from "@reduxjs/toolkit";

const ToggleArrow = createSlice({
  name: "slider",

  initialState: {
    startIndex: 0,
    AccToggle: false,
    colectionToggle: false,
    menuBar: false,
    subCollection: null,
  },

  reducers: {
    setIndex: (state, action) => {
      state.startIndex = action.payload;
    },

    increment: (state) => {
      state.startIndex += 1;
    },

    decrement: (state) => {
      state.startIndex -= 1;
    },

    MenubarItems: (state) => {
      state.menuBar = !state.menuBar;
    },

    Collection: (state) => {
      state.colectionToggle = !state.colectionToggle;
    },

    SubCollection: (state, action) => {
      // Toggle the clicked sub-collection; close if already open
      state.subCollection =
        state.subCollection === action.payload ? null : action.payload;
    },

    ToggleEvent: (state) => {
      state.AccToggle = !state.AccToggle;
    },
  },
});

export const {
  setIndex,
  increment,
  decrement,
  ToggleEvent,
  Collection,
  SubCollection,
  MenubarItems,
} = ToggleArrow.actions;
export default ToggleArrow.reducer;
