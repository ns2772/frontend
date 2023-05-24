import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({ children }) {
    var user = JSON.parse(localStorage.getItem('user'));

    if (user === null || !user.isLoggedIn) {
        return <Navigate to={{ pathname: '/login' }} />
    }
    else { 
        return children
    }
};


export default ProtectedRoute;