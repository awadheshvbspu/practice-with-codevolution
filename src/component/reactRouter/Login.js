import React from 'react'
import { useState } from 'react';
import { useAuth } from './Auth';
import { useNavigate,useLocation } from 'react-router-dom';

export default function Login() {
    const navigate =useNavigate();
    const [user,setUser] = useState('')
    const location =useLocation()
    const redirectPath =location.state ?.path || '/'
  const auth =useAuth()
    const handleLogin =()=>{
        auth.login(user)
        navigate(redirectPath,{replace:true})
    }
  return (
    <>
    <label>Username:</label>
<input type='text' onChange={(e)=> setUser(e.target.value)}/>
<button type='submit' onClick={handleLogin} >Login</button>
    </>
  )
}
