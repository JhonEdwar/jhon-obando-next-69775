
import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

interface sumCounterI{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ShoppingButton: React.FC<sumCounterI> = ({onClick}) => {
  return (
    <button onClick={onClick}>
        <ShoppingBagIcon className="w-[2rem] h-[2rem] text-white cursor-pointer" />
    </button>
  )
}



export default ShoppingButton