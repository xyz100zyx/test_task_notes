import React from 'react';
import './App.scss';
import {MainLayout} from "./layouts/Main/MainLayout";
import {Content} from "./components/content/Content";
import {useSelector} from "react-redux";
import {RootState} from "./store/store";
import {EditPopup} from "./popups/Edit/EditPopup";
import { SearchField } from './components/search/Search';

function App() {

    const isOpenEdit = useSelector((state: RootState) => state.popup.openEdit);
    const activeNote = useSelector((state: RootState) => state.notes.activeNote);

    return (
        <div className={"relative"}>
            <MainLayout>
                <h4 className={"font-jakarta text-title"}>Notes App</h4>
                <SearchField />
                <Content/>
            </MainLayout>
            {isOpenEdit && <EditPopup id={activeNote!.id} title={activeNote!.title} textNote={activeNote!.textNote} tags={activeNote!.tags} colorType={activeNote!.colorType} />}
        </div>
    );
}

export default App;
