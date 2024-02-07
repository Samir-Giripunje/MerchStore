import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../appwrite/authentication';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        console.log('Current auth status:', authStatus);
    }, [authStatus]);

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
