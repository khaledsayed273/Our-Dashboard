import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import HeaderSlice from "./slices/HeaderSlice";
import APISclice from "./slices/APISlice";



const store = configureStore({
    reducer: {
        HeaderSlice: HeaderSlice,
        APISclice: APISclice
    },
    middleware: getDefaultMiddleware({serializableCheck: false})
})

export default store