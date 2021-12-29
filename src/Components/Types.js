import React from "react";
import data from "../data";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Types = ({sortTypes}) => {
    return(
        <div className="types-container">
            {data.map((type) => 
              type.name.toUpperCase().match(sortTypes.toUpperCase()) ||  sortTypes === 'All'?
              (
                <NavLink to={`/quizzes/${type.name}`} className="NavLink" key={uuidv4()}>
                    <div className="types" key={type.id}>
                      <div className="overlay"></div>
                      <img id={type.id} src={type.image} alt={type.text}/>
                      <h2>{type.name}</h2>
                      <h4>{type.text}</h4>
                  </div>
                </NavLink>
              ) 
              : 
              ('')
            )}

        </div>
    );
}

export default Types;