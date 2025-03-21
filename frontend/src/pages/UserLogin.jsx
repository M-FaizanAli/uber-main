import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from '../assets/contexts/UserContext'

const UserLogin = () => {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();

  const {user, setUser } = useContext(UserDataContext);
  
    const submitHandler = async (e)=>{
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        setEmail('');
        setPassword('');

        try {
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
        
          if (response.status === 200) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
          }
        } catch (error) {
          console.error('Login failed:', error);
          // Optionally, you can set an error state to display a message to the user
        }
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOXiSvIzXz6n_pT2Mj-JJi4rnf2q_js8Ycw&s"
          alt="Uber Logo"
        />
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
          <h3 className="text-lg font-medium mb-2">Please enter your E-mail*</h3>
          <input
            required
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">
            Please enter your Password*
          </h3>
          <input
            required
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
          <p className="text-center">New here? <Link to='/signup' className="text-blue-600">Create new Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login'
         className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
