import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : {openEdit: boolean} = {
    openEdit: false
}


const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        toggleEdit : (state, action:PayloadAction<boolean>) => {
            state.openEdit = action.payload;
        }
    }
});

export const {toggleEdit} = popupSlice.actions;
export default popupSlice.reducer;

