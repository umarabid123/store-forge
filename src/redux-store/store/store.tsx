import { configureStore } from "@reduxjs/toolkit";
<<<<<<< ahmad-raza
import ToggleArrow from "@/redux-store/slices/toggle-arrow"
=======
import sliderSlice from "@/redux-store/slices/toggle"
>>>>>>> main


const store = configureStore({
  reducer: {
<<<<<<< ahmad-raza
    slider: ToggleArrow
=======
    slider: sliderSlice
>>>>>>> main
  } // Add your reducers here
});

export default store