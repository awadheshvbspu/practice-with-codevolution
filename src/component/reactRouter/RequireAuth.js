import React from 'react'
import { Navigate,useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

export default function RequireAuth({children}) {
    const location = useLocation()
    const auth = useAuth()
    if(!auth.user){
        return <Navigate to='/login'  />
    }
  return (
    <>
    {children}

    </>
  )
}
