import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//Selectors

export const selectUser = (state) => state.user.user;

//Exports
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
