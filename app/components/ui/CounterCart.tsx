
import React from 'react'
import {useState, } from 'react'

interface CounterI{
    children?: React.ReactNode;
}


const CounterCart: React.FC< CounterI>= ({children}) => {

  return (
    <div className="w-[20px] text-[12px] absolute top-[-7px] right-[-7px] h-[20px] flex items-center justify-center font-semibold rounded-full bg-red-400">
       {children}
    </div>
  )
}



export default CounterCart