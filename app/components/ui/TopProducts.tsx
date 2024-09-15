import React from 'react'
import ProductCard from './ProductCard'
// import { games } from '@/data/products'

interface Game {
  id: string;          
  image: string;
  category: string;
  title: string;
  price: string;        
}


const getPost= async()=>{
   const response = await fetch('http://localhost:3000/api/productos',{
    cache:'no-store',
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
  console.log("esta es la info del firebase " + data)

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
            data.map((game:Game)=>{
             return <ProductCard key={game.id} id={game.id} image={game.image} category={game.category} title={game.title} price={game.price} />
            })
          }


        </div>
    </div>
            
  )
}

export default FeaturedProduct