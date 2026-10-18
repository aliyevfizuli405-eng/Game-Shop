import React from 'react'
import "./Button.css"

export const Button = ({name,icon}) => {
  return (
    <button className='buttonDefault1 flex justify-center rounded-xl items-center bg-[#22D3EE]  p-[12px] **:text-white'>{icon}{name}</button>
  )
}
