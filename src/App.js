import { useState } from "react";
import AddNote from "./Components/AddNote";
import NotesList from "./Components/NotesList";
import { nanoid } from 'nanoid'
import SearchBox from "./Components/SearchBox";
import Title from "./Components/Title";

function App() {
  const [note,setNote]= useState([
    {text:'I have to do somehting today',date:'02/4/2022',id:"1"},
    {text:'Finish the homework',date:'02/4/2022',id:"2"},
    {text:'Go to the meeting',date:'02/4/2022',id:"3"},
    {text:'Learning new skills',date:'02/4/2022',id:"4"}

  ]);

  const [searchValue,setSearchValue] = useState("");
  
  const deleteNote = (id) =>{
    const newNote = note.filter((n)=> n.id != id);
    setNote(newNote);
    console.log("clicked");
  }

  const addNote = (text) =>{
     const date = new Date();
     const newNote ={
       text: text,
       date:date.toLocaleDateString(),
       id:nanoid()
     }

     const newArr = [...note,newNote];
     setNote(newArr);
  }
  return (
  <div className="container">
    <Title></Title>
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
    <NotesList notes={note.filter((n)=>
      n.text.toLocaleLowerCase().includes(searchValue)

    )} addNote={addNote} deleteNote={deleteNote}></NotesList>
  

  </div>

  );
}

export default App;
