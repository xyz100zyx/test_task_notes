import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {INote} from "../../components/content/Content";
import { addNote, changeNote, setActiveNote } from '../../store/slices/notesSlice';
import { toggleEdit } from '../../store/slices/popupSlice';
import { RootState } from '../../store/store';
import { checkNewNote } from '../../utils/checkNewNote';
import { getTagsFromString } from '../../utils/getTagsFromString';

export const EditPopup = (note: INote): JSX.Element => {

    const baseModalStyles = ` p-8 max-w-popup w-full drop-shadow-xl rounded-cart z-1000 opacity-100`;
    const baseCircleStyles = ' block w-8 max-w-color max-h-color min-h-color h-8 rounded-full cursor-pointer';
    const baseInputStyles = `py-1 px-2 outline-none block w-full rounded-input `
    const baseBtnStyles = `py-1 w-full border-none bg-black text-white`

    const colors = new Map<string, string>([
        ['yellow', '#FFA901'],
        ['blue', '#3C2B84'],
        ['pink', '#FFDADA'],
        ['purple', '#D1BAFF'],
        ['gray', '#E4E4E4'],
    ]);
    const keys = Array.from(colors.keys());

    const dispatch = useDispatch();
    const notes = useSelector((state: RootState) => state.notes.notes);

    const [title, setTitle] = React.useState(note.title);
    const [text, setText] = React.useState(note.textNote);

    const onSaveBtnClick = () => {
        if(checkNewNote(notes, {
            id: note.id,
            title: title,
            textNote: text,
            colorType: note.colorType,
            tags: getTagsFromString(title + " " + text),
        })){
            dispatch(addNote({
                id: note.id,
                title: title,
                textNote: text,
                colorType: note.colorType,
                tags: getTagsFromString(title + " " + text),
            }))
        }else{
            dispatch(changeNote({
                id: note.id,
                title: title,
                textNote: text,
                colorType: note.colorType,
                tags: getTagsFromString(title + " " + text),
            }))
        }
        dispatch(toggleEdit(false));
    }

    const onClickCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.target === e.currentTarget) dispatch(toggleEdit(false));
    }

    const onColorBallClick = (color: string) => {
        const {colorType, ...data} = note;
        dispatch(changeNote({...data, colorType:color}));
        dispatch(setActiveNote({...data, colorType:color}));
    }

    const onTitleChange = (title: string) => {
        setTitle(title);
    }

    const onTextChange = (text: string) => {
        setText(text)
    }

    return (
        <div onClick={(e: React.MouseEvent<HTMLDivElement>) => onClickCloseModal(e)} className={`absolute top-0 left-0 w-full h-full flex justify-center items-center z-40`}>
            <div className={(note.colorType === 'pink' ? 'bg-pink' : note.colorType === 'yellow' ? 'bg-yellow' : note.colorType === 'blue' ? 'bg-blue' : note.colorType === 'gray' ? 'bg-gray' : note.colorType === 'purple' ? 'bg-purple' : 'bg-black') + baseModalStyles}>
                <ul className={"flex gap-2 pb-14"}>
                    {keys.map((color, index: number) => {
                        return (
                            <li key={color}>
                                <span onClick={() => onColorBallClick(color)} className={(color === 'pink' ? 'bg-pink' : color === 'yellow' ? 'bg-yellow' : color === 'blue' ? 'bg-blue' : color === 'gray' ? 'bg-gray' : color === 'purple' ? 'bg-purple' : 'bg-black') + baseCircleStyles + ' border-2 border-black'}></span>
                            </li>
                        )
                    })}
                </ul>
                <input placeholder={'Title'} type={'text'} value={title} onChange={(e: React.FormEvent<HTMLInputElement>) => onTitleChange(e.currentTarget.value)} className={baseInputStyles + "mb-2 text-input-title tracking-input-title leading-input-title"} />
                <textarea placeholder={'Text'} value={text} onChange={(e: React.FormEvent<HTMLTextAreaElement>) => onTextChange(e.currentTarget.value)} className={baseInputStyles + "mb-9 text-input-text tracking-input-text leading-input-text pb-44"}/>
                <button className={baseBtnStyles} onClick={() => onSaveBtnClick()}>Save</button>
            </div>
        </div>
    )
}