import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({notes,handleSaveText, handleDeleteNote}) => {
    return (
        <div className="notes-list">
            {notes.map((note)=><Note id={note.id} text={note.text} date={note.date} key={note.id} handleDeleteNote={handleDeleteNote} />)}
            <AddNote handleSaveText={handleSaveText}/>
        </div>
    )
}

export default NotesList;