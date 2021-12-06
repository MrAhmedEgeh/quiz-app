import React from 'react';
import NotFoundImage from '../Assets/library.jpg';
import { NavLink } from "react-router-dom";
const NotFound = () => {
    return(
        <div className="notfound">
            <div className="overlay"></div>
            <div className="content">
                <h2>404</h2>
                <h4>Page you're looking for isn't found</h4>
                <NavLink className="btn-container" to="/"><button>Home Page</button></NavLink>
            </div>
        </div>
    );
}
export default NotFound;
