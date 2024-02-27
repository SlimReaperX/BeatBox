import { UserApi } from "./user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (cred) => ({
        url: "/auth/login",
        method: "POST",
        body: cred,
      }),
    }),
    register: builder.mutation({
      query: (cred) => ({
        url: "/auth/register",
        method: "POST",
        body: cred,
      }),
    }),
    edit: builder.mutation({
      query: (cred) => ({
        url: "/auth/edit",
        method: "PUT",
        body: cred,
      }),
    }),
    logout: builder.mutation({
      queryFn: () => ({ data: {} }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useEditMutation,
} = authApi;
