import React,{useCallback} from 'react'
import Title from './Title'
import { useState } from 'react'
import Count from './Count';
import Button from './Button';

export default function UseCallbackHook() {
    const [salary,setSalary] =useState(50000)
    const [age,setAge] =useState(25);

    const incrementAge =useCallback( () =>{
        setAge (age+1)
    },[])
    const incrementSalary = useCallback(() =>{
        setSalary(salary+1000)
    },[])
  return (
    <>
    <div>
        <Title/>
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge} >Increment Age</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary} >Increment Salary</Button>
        </div>
    </>
  )
}
