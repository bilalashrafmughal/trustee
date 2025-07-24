import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  // Add more global states as needed
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setLoading, setError } = appSlice.actions;
export default appSlice.reducer;
