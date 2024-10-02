'use client'
import {useState} from 'react'
import Counter from './counter'
import Button from './Button'
import { useCartContext , CartProvider} from '../context/CartContext'

const CountSelector = ({item}) => {   

    const {addToCart} = useCartContext()
    const [cant,setCant]=useState(1)


    const handleAddCont=()=>{
        setCant(cant+1)
    }
    const handleLessCont=()=>{
        setCant(cant-1)
    }

    
    const handleAddToCart=(cantidad)=>{
        console.log(cantidad)
        
        let items=[]
        for(let i=0; i<cantidad; i++){
            items=[...items,{...item}]
        }

        addToCart(items)
    }
    
    return (
        <div className=' flex flex-col gap-5 mt-6'>
            {/* <Counter counter={cant} setCounter={setCant}/> */}

            <div className='flex items-center justify-center w-32'>
                <Button onClick={handleLessCont}>-</Button>
                     {cant}
                <Button onClick={handleAddCont}>+</Button>
            </div>

            <Button onClick={() => handleAddToCart(cant)}> Agregar al carrito</Button>
        </div>
    )
}

export default CountSelector