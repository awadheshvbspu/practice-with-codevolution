import React,{useState} from 'react'

export default function UseSateWithObject() {
    const [name,setName] =useState({firstName:"", lastName:""});

  return (
   <>
    <div className='App'>
<form>
    <input type='text' value={name.firstName} onChange={(e)=>setName({...name, firstName: e.target.value})} />
    <input type='text' value={name.lastName} onChange={(e)=>setName({...name,lastName: e.target.value})} />
    <h2> The firstName is - {name.firstName}</h2>
    <h2> The lastName is - {name.lastName}</h2>
    <h2>{JSON.stringify(name)}</h2>
</form>

    </div>
   </>
  )
}
