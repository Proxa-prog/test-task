import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Auth = {
  isAuth: boolean;
};

const initialState: Auth = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { changeAuth } = authSlice.actions;

export default authSlice.reducer;
