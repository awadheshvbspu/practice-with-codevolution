import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

export default function Users() {
    const [searchParam,setSearchParam] =useSearchParams();
    const showActiveUsers =searchParam.get('filter') === 'active'
  return (
    <>
    <h1>Users 1</h1>
    <h1>Users 2</h1>
    <h1>Users 3</h1>
    <Outlet/>
    <div>
        <button onClick={()=>setSearchParam({filer:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParam({})}>Reset Filter</button>
    </div>
    {
        showActiveUsers ? (<h1>Showing Active Users</h1>) : (<h1>Showing all users</h1>)
    }
    </>
  )
}
