import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProductsTable = async() => {
    const items=await fetch("http://localhost:3000/api/productos",{
        cache:"no-store"
    }).then(r=>r.json())


  return (
    <div className='overflow-x-auto'>
        <table className='w-full text-xs text-left text-gray-600'>
            <thead className='text-xs text-gray-700 uppercase'>
                <tr>
                    <th scope='col' className='px-3 py-2'>Nombre</th>
                    <th scope='col' className='px-3 py-2'>Precio</th>
                    <th scope='col' className='px-3 py-2'>Imagen</th>
                    <th scope='col' className='px-3 py-2'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td className='p-2'>{item.title}</td>
                                <td className='p-2'>{item.price}</td>
                                <td className='p-2'>
                                    <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={80} 
                                    />
                                </td>
                                <td className='p-2'>
                                    <Link href={`/admin/edit/${item.id}`} className='rounded bg-green-400 p-2 text-white'>
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
