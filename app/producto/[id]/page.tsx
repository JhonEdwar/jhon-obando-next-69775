import React from 'react'
// import {useParams} from 'next/navigation'
// import { games } from '@/data/products'
import Image from 'next/image';
import { HeartIcon,ShoppingBagIcon } from '@heroicons/react/24/solid'
import Header from '@/app/components/ui/Header';


const getData=async(id:string) =>{
    const response= await fetch(`http://localhost:3000/api/producto/${id}`)
    
    console.log('y que nos trae de la await --------------------: ', response);


    if (!response.ok) {
        const errorMessage = `Error fetching data: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log('Data:', data); 
    return data;
}

const Juego = async ({params}: { params: { id: string } }) => {

    const {id}=params
    console.log(`aquie hay un id? ${id}`);
    const data=await getData(id)
    return (
        <>       
        <div  className=" h-screen pt-[6rem] pb-[3rem] bg-gray-900 flex justify-center">
            
                <div className="w-[80%] h-fit flex flex-col items-center justify-center">
                    <Image
                        src={`${data?.image}`}
                        alt={`${data?.title}`}
                        width={350}
                        height={200}
                        className="w-[50%] h-[400px] object-cover md:w-[50%] md:h-[400px]"
                    />
                    <div className="mt-[1rem] w-[100%] md:w-[90%]">
                        <div className="flex items-center justify-between">
                            <p className="text-[14px] text-white opacity-70">{data?.category}</p>
                            <HeartIcon className="w-[1rem] h-[1rem] text-gray-500" />
                        </div>
                        <h1 className="mt-[0.3rem] font-bold text-white opacity-85">{data?.title}</h1>
                        <div className="mt-[0.3rem] flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <p className="text-[16px] text-white opacity-75">
                                ${data?.price}
                                </p>
                            </div>
                            <ShoppingBagIcon className="w-[1.2rem] h-[1.2rem] text-orange-400" />
                        </div>
                    </div>
                </div>
            
        </div>
        </>
        
  )
}

export default Juego