import { configureStore } from "@reduxjs/toolkit";
import { UserApi } from "./redux/api/api";
import authReducer from './redux/slices/authSlice'
import socketReducer from './redux/socket'


const store = configureStore({
    reducer: {
        [UserApi.reducerPath]: UserApi.reducer,
        auth: authReducer,
        sockets: socketReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(UserApi.middleware),
});

export default store;
