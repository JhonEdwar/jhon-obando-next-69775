'use client'
import React, { useState } from 'react'
import Button from './Button'

const Counter = ({counter, setCounter}) => {
    

    const handleAddCont=()=>{
        setCounter(counter+1)
    }

    const handleLessCont=()=>{
        setCounter(counter-1)
    }

  return (
    <div className='flex items-center justify-center w-32'>
        <Button onClick={handleLessCont}>-</Button>
            {counter}
        <Button onClick={handleAddCont}>+</Button>
    </div>
  )
}


export default Counter