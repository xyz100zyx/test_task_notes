import React from 'react';
import {toggleEdit} from "../../store/slices/popupSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {INote} from "../content/Content";
import {setActiveNote} from "../../store/slices/notesSlice";

export const Cart = (note: INote): JSX.Element => {

    const dispatch = useDispatch();
    const isOpenEdit = useSelector((state: RootState) => state.popup.openEdit);

    const onCartClick = (note: INote) => {
        dispatch(setActiveNote(note))
        dispatch(toggleEdit(!isOpenEdit));
    }

    const constCartStyles = ' cursor-pointer p-12 flex flex-col rounded-cart gap-4 max-w-cart max-h-cart shadow-cart w-full';

    return (
        <div onClick={() => onCartClick(note)} className={(note.colorType === 'pink' ? 'bg-pink' : note.colorType === 'yellow' ? 'bg-yellow' : note.colorType === 'blue' ? 'bg-blue' : note.colorType === 'gray' ? 'bg-gray' : note.colorType === 'purple' ? 'bg-purple' : 'bg-black') + constCartStyles}>
            <span className={'pb-4 font-poppins text-cart-title leading-cart-title tracking-cart-title'}>{note.title}</span>
            <span className={'pb-4 font-poppins text-cart-text leading-cart-text tracking-cart-text font-cart-text'}>{note.textNote}</span>
            <ul className='flex flex-wrap w-full gap-2'>
                {note.tags.map((tag): React.ReactNode => {
                    return <span key={note.id} className={"block px-1 py-1 bg-white font-poppins text-tag leading-tag tracking-tag cursor-pointer rounded-input"}>{tag}</span>
                })}
            </ul>
        </div>
    )
}