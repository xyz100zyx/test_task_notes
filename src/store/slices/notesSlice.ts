import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INote} from "../../components/content/Content";

interface IState{
    notes: Array<INote>,
    activeNote: INote | null,
}

const initialState:IState = {
    notes: [
        {
            title: 'Test1',
            textNote: 'Test1 #text',
            tags: ['#text'],
            colorType: 'gray',
            id: '1',
        },
        {
            title: 'Test1',
            textNote: 'Test1 text',
            tags: [],
            colorType: 'yellow',
            id: '2',
        },
        {
            title: 'Test1',
            textNote: '#Test1 text',
            tags: ['#Test1'],
            colorType: 'pink',
            id: '3',
        },
        {
            title: 'Test1',
            textNote: 'Test1 text #tag',
            tags: ['#tag'],
            colorType: 'purple',
            id: '4',
        }
    ],
    activeNote: null
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setActiveNote: (state, action:PayloadAction<INote>) => {
            state.activeNote = action.payload;
        },
        addNote: (state, action: PayloadAction<INote>) => {
            state.notes = [...state.notes, action.payload];
        },
        removeNote: (state, action: PayloadAction<INote>) => {
            const buffer = state.notes.filter((note: INote) => note.id !== action.payload.id )
            state.notes = [...buffer];
        },
        changeNote: (state, action: PayloadAction<INote>) => {
            state.notes.map((note, index: number) => {
                if(note.id === action.payload.id) state.notes[index]=action.payload;
            })
        }
    }
})

export const {setActiveNote, addNote, removeNote, changeNote} = notesSlice.actions;
export default notesSlice.reducer;