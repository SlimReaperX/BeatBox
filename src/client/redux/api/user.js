import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const CREDENTIALS = "credentials";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
    prepareHeaders: (headers, { getState }) => {
        const credentials = window.sessionStorage.getItem(CREDENTIALS);
        const parsedCredentials = JSON.parse(credentials || "{}");
        const token = parsedCredentials.token;
        if (token) {
            headers.set("Authorization", token);
        }
        return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/users",
    }),
    getUserById: builder.query({
      query: (id) => `/api/users/${id}`,
    }),
  }),
});

export const {
    useGetUserByIdQuery,
    useGetUsersQuery
} = UserApi;
