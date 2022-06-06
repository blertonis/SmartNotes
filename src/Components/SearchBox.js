import { useState } from 'react';
import {MdSearch} from 'react-icons/md';
const SearchBox = ({searchValue,setSearchValue})=>{

   
    return(<div className="search-container">
            <MdSearch className="search-icon" size='1.3em'>

            </MdSearch>
            <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} placeholder="Search for a note"></input>
    </div>)
}

export default SearchBox;