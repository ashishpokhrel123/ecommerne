import { createSlice } from "@reduxjs/toolkit";

type User = {
  access_token: string | null;
  hasFetched: boolean;
  isLoggedIn: boolean;
  details: {
    id: string | null;
    name: string | null;
    email: string | null;
    photo: string | null;
  };
};

const initialState: User = {
  access_token: null,
  hasFetched: false,
  isLoggedIn:false,
  details: {
    id: null,
    name: null,
    email: null,
    photo: null,

  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAccessToken(state, { payload }) {
      state.access_token= payload;
      state.isLoggedIn = true;
     
    },
    updateUserDetails(state, { payload }) {
      
      state.details = payload;
    },
    toggleFetched(state, { payload: v }) {
      state.hasFetched = v;
    },
  },
});
export const { updateAccessToken, updateUserDetails, toggleFetched } =
  userSlice.actions;

export const selectedUserDetails = (state:any) => state.user.details;
export const selectAccessToken = (state: any) => state.user.access_token;
export const IsAuthenticated = (state: any) => state.user.isLoggedIn;

export default userSlice.reducer;
