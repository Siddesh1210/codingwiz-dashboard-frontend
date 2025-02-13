import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: token || "ZAJ5_Bg", // Restore token from localStorage
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Store token
    },
    logout: (state) => {
      state.token = "ZAJ5_Bg";
      localStorage.removeItem("token"); // Clear token on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
