import { createSlice } from "@reduxjs/toolkit";

interface IState{
    searchText: string,
}

interface actionPayload{
    payload: string;
}

const initialState: IState ={
    searchText: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchText: (state, action: actionPayload) => {
            state.searchText = action.payload;
        }
    }
})

export const {setSearchText} = searchSlice.actions;
export default searchSlice.reducer;