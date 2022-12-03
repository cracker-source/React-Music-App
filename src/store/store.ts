import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import musicPlayerReducer from "./reducers/musicPlayerReducer";



export const store = configureStore({
    reducer: {
        musicPlayer: musicPlayerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useStoreDispatch: () => AppDispatch = useDispatch 