import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({notes,addNote,deleteNote}) =>{
    return (<div class="notes-list">
        {notes.map((n)=>(

            <Note id={n.id} text={n.text} date={n.date} deleteNote={deleteNote}></Note>
        ))}

<AddNote addNote={addNote}></AddNote>
    </div>)
}

export default NotesList;