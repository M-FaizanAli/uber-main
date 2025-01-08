import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(!token) {
            navigate('/captain-login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200) {
            localStorage.removeItem('token');
            navigate('/captain-login');
        }
    }).catch((error) => {
        // console.log(error);
    });
}, [navigate, token]);

  return null;
}

export default CaptainLogout
