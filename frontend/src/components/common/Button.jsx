import React from 'react'
{
    /**
     -TODO- make a general button component with props {onClick, text, class}
     */
}
const Button = ({ onClick, text, className }) => {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export default Button