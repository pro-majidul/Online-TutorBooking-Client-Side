import React from 'react';
import useUsers from '../hooks/useUsers';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loader } = useUsers()
    const location = useLocation()
    if (loader) {
        return <div className='flex items-center justify-center h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    if (user) {
        return children
    }


    return <Navigate to='/login' state={location.pathname}></Navigate>


};

export default Private;