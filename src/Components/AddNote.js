import { useState } from "react";
const AddNote = ({addNote}) => {

    const charlimit = 150;
    const [noteText,setNoteText] = useState("");
    const handleChange = (e) =>{
        if(charlimit - e.target.value.length>=0){
            setNoteText(e.target.value);
        }
    }

    const saveNote = () => {
        if(noteText.trim().length>=1){
            addNote(noteText);
            setNoteText("");
        }
        
    };

    return(<div className="note new">
        <textarea rows="8" cols="10"  value={noteText} onChange={handleChange} placeholder="Add a note"></textarea>
        <div class="note-footer">
            <small>{charlimit - noteText.length} remaning</small>
            <button className="save" onClick={saveNote}>Add Note</button>
        </div>
    </div>)
}

export default AddNote;