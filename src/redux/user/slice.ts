import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./types";

const initialState: IUser = {
  email: "",
  token: "",
  id: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state: IUser, action: { payload: any; type: string }) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state: IUser) {
      state.email = "";
      state.token = "";
      state.id = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
