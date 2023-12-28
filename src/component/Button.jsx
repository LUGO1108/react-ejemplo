import React from 'react'

const Button = (props) => {
   
    const {name} = props
  return (
    <>
    <button className='bg-indigo-500 px-5 py-2'>{name}</button>
    </>
  )
}

export default Button