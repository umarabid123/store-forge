import { configureStore } from "@reduxjs/toolkit";
import ToggleArrow from "@/redux-store/slices/toggle-arrow"


const store = configureStore({
  reducer: {
    slider: ToggleArrow
  } // Add your reducers here
});

export default store