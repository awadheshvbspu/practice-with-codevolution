import React from 'react'
import { NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { useAuth } from './Auth';

export default function NavBar() {
    const navLinkStyles = ({isActive})=>{
        return{
            fontWeight:isActive ? 'bold' :'normal',
            TextDecoration:isActive ? 'none':'underline'
        }
    }
    const auth = useAuth()
  return (
    <>
        <nav>
        <NavLink to='/' style={navLinkStyles}>Home</NavLink>
        <NavLink to='/about' style={navLinkStyles}>About</NavLink>  
        <NavLink to='/products' style={navLinkStyles} >Products</NavLink>  
        <NavLink to='/profile' style={navLinkStyles}>Profile</NavLink>
        {
          !auth.user && (
            <NavLink to='/login' style={navLinkStyles}>Login</NavLink>
          )
        } 
        </nav>
    </>
  )
}
