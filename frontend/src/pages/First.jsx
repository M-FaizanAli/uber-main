import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' 
 
 
const First = () => {


  

  return (
    <div className='bg-[url(https://img.freepik.com/free-photo/side-view-hands-holding-smartphone_23-2149764150.jpg?semt=ais_hybrid)] h-screen pt-8 flex justify-between flex-col w-full'>
       <img className='w-20 ml-8 object-contain' src={logo} alt="Uber Logo" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>
            <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>

    </div>
  )
}

export default First