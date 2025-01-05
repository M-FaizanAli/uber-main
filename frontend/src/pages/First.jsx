import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' 
import { UserDataContext } from '../contexts/UserContext'
 
const First = () => {

  const userData = useContext(UserDataContext);
  console.log(userData);

  return (
    <div className='bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png)] h-screen pt-8 flex justify-between flex-col w-full'>
       <img className='w-20 ml-8 object-contain' src={logo} alt="Uber Logo" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>
            <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
    </div>
  )
}

export default First