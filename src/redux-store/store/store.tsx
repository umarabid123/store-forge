import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "@/redux-store/slices/toggle"


const store = configureStore({
  reducer: {
    slider: sliderSlice
  } // Add your reducers here
});

export default store