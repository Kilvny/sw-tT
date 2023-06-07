import React from 'react'
{
    /**
     -TODO- make a general button component with props {onClick, text, class}
     */
}
const Button = ({ onClick, text, className, name, onFocus }) => {
  return (
    <button name={name} className={className} onClick={onClick} onMouseLeave={onFocus}>{text}</button>
  )
}

export default Button