import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuthenticated: false,
      userInfo: {
        exp: 0,
        iat: 0,
        nbf: 0,
        exp_duration: 0,
        user: { phone:'',email:'',_id: '', username: '', name: '', hourly_rate: null, role: [] },
      },
      profileInfo:{}
    },
    reducers: {
      setIsAuthenticated(state, action) {
        state.isAuthenticated = action.payload;
      },
      setUserInfo(state, action) {
        var JWTtoken = action.payload.split('.')[1];
        var base64 = JWTtoken.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
          window
            .atob(base64)
            .split('')
            .map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
        state.userInfo = JSON.parse(jsonPayload);
      },
      setProfileInfo(state, action){
        state.profileInfo= action.payload
      },
      logOut(state) {
        state.userInfo = {
          exp: 0,
          iat: 0,
          nbf: 0,
          exp_duration: 0,
          user: { phone: '', email: '', _id: '', username: '', name: '', hourly_rate: null, role: [] },
  
        };
         window.localStorage.removeItem('access_token');
         window.localStorage.removeItem('login_time');
      },
    },
  });
  export const authActions = authSlice.actions;
  export default authSlice.reducer;