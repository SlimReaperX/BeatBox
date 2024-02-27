import { createSlice } from "@reduxjs/toolkit";
import { UserApi } from "../api/user";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    user: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        UserApi.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.users = payload;
        }
      )
      .addMatcher(
        UserApi.endpoints.getUserById.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
        }
      );
  },
});

export default userSlice.reducer;
export const { setUsers, setUser } = userSlice.actions;
