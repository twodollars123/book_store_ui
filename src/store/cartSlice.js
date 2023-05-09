import { createSlice } from "@reduxjs/toolkit";
// import { getCart } from "../ApiServices/cartApi";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      isError: false,
    },
  },
  reducers: {
    getAllUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
    },
    getAllUsersFalure: (state) => {
      state.users.isError = true;
      state.users.isFetching = false;
    },
  },
});

export const { getAllUsersFalure, getAllUsersStart, getAllUsersSuccess } =
  cartSlice.actions;

export default cartSlice.reducer;
