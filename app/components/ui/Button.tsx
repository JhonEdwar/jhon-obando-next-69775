import React from 'react'

interface BotonProps{
    children: React.ReactNode;
    className?:string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

 const Button:React.FC<BotonProps>=({children, className='', ...args}) =>{
  return (
    <button className={`border-solid border-2 border-yellow-300 
        text-[12px] md:text-[12px] text-yellow-300  p-1 mx-auto my-2 px-4 ${className}`}{...args}>
        {children}
    </button>
  )
}


export default Button