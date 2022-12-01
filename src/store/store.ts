import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import popupReducer from "./slices/popupSlice";
import notesReducer from "./slices/notesSlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        popup: popupReducer,
        notes: notesReducer,
        search: searchReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;
