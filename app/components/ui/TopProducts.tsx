import React from 'react'
import ProductCard from './ProductCard'
import { games } from '@/data/products'

const getPost= async()=>{
   const response = await fetch('http://localhost:3000/api/productos',{
    cache:'force-cache',
    next:{
      tags:['productos']
    }
   })
   if(!response.ok){
    throw new Error("Wrong get data")
   }
   return response.json()
}

const FeaturedProduct = async() => {
  const data= await getPost()
  return (
    <div className="pt-[6rem] pb-[3rem] bg-gray-900">
        <div className=" flex items-center justify-between">

            <h1 className="md:text-[28px] text-[22px] 1g:text-[34px] text-white">
            Productos destacados
            </h1>

            <button className="uppercase text-[13px] md:text-[15px] text-yellow-300">
            Ver todos los productos
            </button>
        </div>
                
        <div className="grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-[80%] mx-auto">
           {
            games.map((data)=>{
             return <ProductCard key={data.id} id={data.id} image={data.image} category={data.category} title={data.title} price={data.price} />
            })
          }


        </div>
    </div>
            
  )
}

export default FeaturedProduct