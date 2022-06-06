import { useState,createContext, useReducer } from "react"
import { nanoid } from 'nanoid'
export const AppContext = createContext();


const noteReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_NOTE':
            return [...state,{
				text:action.note.text,
				date:'',
				author:action.note.author,
				id:nanoid()
			}]
        case 'REMOVE_NOTE':
            return state.filter((n)=> n.id != action.id);
		default:
		return state;
    }
}
export const AppProvider = (props) =>{
    const [notes,dispatch] = useReducer(noteReducer,[
	{text:'I have to do somehting today',date:'02/4/2022',id:"1"},
    {text:'Finish the homework',date:'02/4/2022',id:"2"},
    {text:'Go to the meeting',date:'02/4/2022',id:"3"},
    {text:'Learning new skills',date:'02/4/2022',id:"4"}
	
	]);

  
    return(<div>
        <AppContext.Provider value={{notes,dispatch}}>
            {props.children}
        </AppContext.Provider>
    </div>);
}