import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AddCart } from '../carts/AddCart';
import {Cart} from "../carts/Cart";

export interface INote {
    id: string,
    title: string,
    textNote: string,
    tags: Array<string>,
    colorType: string,
}

export const Content = (): JSX.Element => {

    let notes = useSelector((state: RootState) => state.notes.notes);
    const searchValue = useSelector((state: RootState) => state.search.searchText);

    if(searchValue){
        notes = notes.filter((note) => {
            const noteTags = note.tags.join(' ');
            return (note.title + " " + note.textNote + " " + noteTags).toLowerCase().includes(searchValue.toLowerCase())
        }); 
    }

    return (
        <div className={"p-4 flex flex-wrap gap-14"}>
            {notes.map((note: INote, index: number): JSX.Element => {
                return <Cart key={note.title + index} title={note.title} textNote={note.textNote} tags={note.tags}
                             colorType={note.colorType} id={note.id}/>
            })}
            <AddCart />
        </div>
    )
}