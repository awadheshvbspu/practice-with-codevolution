import React,{useRef,useEffect} from 'react'

export default function UseRefFocusInput() {
    const inputRef = useRef(null)
    useEffect(()=>{
//focus the input element
 inputRef.current.focus()
    },[])
  return (
    <>
        <div className='App'>
            <input type="text" ref={inputRef}/>
        </div>
    </>
  )
}
