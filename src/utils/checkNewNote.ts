import { INote } from "../components/content/Content";

export const checkNewNote = (notes: Array<INote>, note: INote) => {
    const existIds: Array<string> = notes.map((note) => {
        return note.id;
    });

    return !existIds.includes(note.id);
}