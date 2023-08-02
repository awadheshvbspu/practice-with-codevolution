import React from 'react'

export default function Button({handleClick,children}) {
    console.log('Rendering button' ,children)
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}
