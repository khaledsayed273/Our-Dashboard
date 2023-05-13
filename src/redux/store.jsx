import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import HeaderSlice from "./slices/HeaderSlice";



const store = configureStore({
    reducer: {
        HeaderSlice: HeaderSlice
    },
    middleware: getDefaultMiddleware({serializableCheck: false})
})

export default store