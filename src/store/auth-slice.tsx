import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    accessToken: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.accessToken = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
