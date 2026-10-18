import React from 'react'

export const CartItem = ({coverImage,title,price}) => {
  return (
    <div className='flex'>
        <img src={coverImage} className='hover:zoom-125' alt="" />
        <h3 className='text-white'>{title}</h3>
        <h6 className='text-white'>{price}</h6>
    </div>
  )
}
