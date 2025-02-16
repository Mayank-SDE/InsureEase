import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage if available
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,  // Stores user data
  isAuthenticated: !!user, // Boolean flag for auth status
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
