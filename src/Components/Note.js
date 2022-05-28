import {MdDeleteForever} from 'react-icons/md'
const Note = ({id,text,date,deleteNote}) =>{

    return (<div className="note">
       <span>{text}</span>
       <div className="note-footer">
           <small>{date}</small>
            <MdDeleteForever className="delete-icon" onClick={()=> deleteNote(id)} size="1.3em"></MdDeleteForever>
       </div>
    </div>)
}

export default Note;