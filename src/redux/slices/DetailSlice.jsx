import { createSlice } from "@reduxjs/toolkit";

// Creating the slice for managing detail state
const DetailSlice = createSlice({
  name: "detail", // Name of the slice
  initialState: {
    detail: {}, // Initial state of the slice
  },
  reducers: {
    // Reducer to set the detail object
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

// Exporting the action to be used in components
export const { setDetail } = DetailSlice.actions;

// Exporting the reducer to be included in the store
export default DetailSlice.reducer;
