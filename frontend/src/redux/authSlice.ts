import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
  isLoggedIn:false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken(state, { payload }) {
      state.access_token = payload;
      state.isLoggedIn = true;
    },
  },
});

export const { updateAccessToken } = authSlice.actions;
export const selectAuthDetails = ({ auth }: any) => auth.access_token;
export const selectAccessToken = ({ auth }: any) => auth.access_token;


export default authSlice.reducer;
