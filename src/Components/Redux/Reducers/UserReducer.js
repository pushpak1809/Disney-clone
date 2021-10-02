import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setLogoutState: (state, action) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setLoginState, setLogoutState } = UserReducer.actions;

export const SelectUserName = (state) => state.user.name;
export const SelectUserEmail = (state) => state.user.email;
export const SelectUserPhoto = (state) => state.user.photo;

export default UserReducer.reducer;
