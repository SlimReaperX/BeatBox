import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        api.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.users = payload;
        }
      )
      .addMatcher(
        api.endpoints.getUserById.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
        }
      );
  },
});

export default userSlice.reducer;
