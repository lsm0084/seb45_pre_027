import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setIsLogin } = userInfoSlice.actions;
export default userInfoSlice.reducer;
