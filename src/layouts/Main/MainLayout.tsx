import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface IProps{
    children: React.ReactNode
}

export const MainLayout = ({children}:IProps): JSX.Element => {

    const isOpenPopup = useSelector((state: RootState) => state.popup.openEdit);

    return(
        <div className={"container mx-auto max-w-4xl min-h-full h-full" + (isOpenPopup ? " opacity-20" : "")}>
            {children}
        </div>
    )
}