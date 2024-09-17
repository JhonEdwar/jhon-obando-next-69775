'use client'
import {useState} from 'react'
import Counter from './counter'
import Button from './Button'
import { useCartContext , CartProvider} from '../context/CartContext'

const CountSelector = ({item}) => {   

    const {addToCart} = useCartContext()
    const [cant,setCant]=useState(1)
    
    const handleAddToCart=()=>{
        addToCart({...item,cant})
    }
    
    return (
        <div className=' flex flex-col gap-5 mt-6'>
            <Counter counter={cant} setCounter={setCant}/>
            <Button onClick={handleAddToCart}> Agregar al carrito</Button>
        </div>
    )
}

export default CountSelector