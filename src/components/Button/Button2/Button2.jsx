import React from 'react'
import "./Button2.css"
export const Button2 = ({icon,text,classes}) => {
  return (
    <button className={`button__default2 flex justify-center items-center p-2.5 rounded-xl bg-[#8B5CF6]  hover:bg-[#A78BFA]  text-white text-[14px] ${classes} `}>{icon}{text}</button>
  )
}
