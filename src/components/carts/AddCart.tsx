import React from 'react';
import { INote } from '../content/Content';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { toggleEdit } from '../../store/slices/popupSlice';
import { addNote, setActiveNote } from '../../store/slices/notesSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const AddCart = (): JSX.Element => {

    const constCartStyles = ' cursor-pointer p-12 flex rounded-cart gap-4 max-w-cart max-h-cart shadow-cart w-full bg-black justify-center items-center';
    const dispatch = useDispatch();

    const onCartClick = () => {
        dispatch(toggleEdit(true));
        dispatch(setActiveNote(clearedNote));
    }

    const clearedNote: INote = {
        id: uuid(),
        title: '',
        textNote: '',
        colorType: 'yellow',
        tags: [],
    }

    return (
        <div onClick={() => onCartClick()} className={constCartStyles}>
            <span className={"text-white text-cart-title leading-cart-title tracking-cart-title"}>
                +
            </span>
        </div>
    )
}