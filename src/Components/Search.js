import React from 'react';

const Search = ({setSortTypes}) => {

    // HANDLERS
    const searchTypesHandler = (e) =>{
        if(e.target.value === ''){
            setSortTypes('All');
        }else{
            setSortTypes(e.target.value);
        }
    }
    return(
        <div className="search-container">
           <div className="input-container">
           <input onChange={searchTypesHandler} type="search" placeholder="Search a quiz" />
           </div>
        </div>
    );
}

export default Search;