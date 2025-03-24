import { createSlice } from "@reduxjs/toolkit";
import { generateUsers } from "../utils/generateUsers";

const initialState = {
  users: generateUsers(1000000),
  selectedUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { selectUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
