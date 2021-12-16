import React from 'react';
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

const Dashboard = () => {
    const {currentUser} = useAuth()
    if(currentUser === null){
        return <Navigate from="/dashboard" to="/" />
     }
    return ( 
        <div className="dashboard">{JSON.stringify(currentUser)}</div>
     );
}

export default Dashboard;