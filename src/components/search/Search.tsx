import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../../store/slices/searchSlice';

export const SearchField = () => {

    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();
    
    const onChangeInput = (text: string) => {
        setValue(value);
        dispatch(setSearchText(text));
    }

    return (
        <div>
            <input className={"mt-2 py-4 px-4 outline-none font-jakarta text-input-text focus:border-b-2 box-border focus:outline-0"} placeholder={"Search by title or tag..."} onChange={(e: React.FormEvent<HTMLInputElement>) => {onChangeInput(e.currentTarget.value)}} />
        </div>
    )
}