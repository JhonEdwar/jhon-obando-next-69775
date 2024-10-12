'use client'

import React from 'react'
import { useState } from 'react'
import Button from '../ui/Button'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {doc,setDoc} from 'firebase/firestore'
import {db,storage} from '@/firebase/config'


const createProduct=async(values,file)=>{
    const storageRef= ref(storage, values.id)
    const fileSnapshot=await uploadBytes(storageRef,file)
    const fileURL=await getDownloadURL(fileSnapshot.ref)
 const docRef = doc(db, "productos", values.id)
 return setDoc(docRef,{
    ...values,
    image:fileURL
    })
 .then(()=>console.log('producto agregado!'))
}


export const CreateForm = () => {
    const[values,setValues]=useState({
        title:'',
        price:'',
        id:'',
        category:''
    })
    const [selectedFile, setSelectedFile] = useState(null);


    const handleChange=(e)=>{
        if (e.target.name === 'image') {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
              setSelectedFile(file); // Guarda el archivo si es una imagen
            } else {
              alert('Por favor selecciona un archivo de imagen válido.');
            }
          } else {
            setValues({
              ...values,
              [e.target.name]: e.target.value,
            });
          }
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        await createProduct(values,selectedFile)
    }


  return (
    <div className='container m-auto mt-6 max-w-lg'>
         <form onSubmit={handleSubmit} className='my-12'>
            <label> Id: </label>
            <input type="text" 
                value={values.id}
                required
                className='p-2 rounded w-full border border-blue-100 block my-4 text-black'
                name="id"
                onChange={handleChange}
            />
            <label>Nombre </label>
            <input type="text" 
                value={values.title}
                required
                className='p-2 rounded w-full border border-blue-100 block my-4 text-black	'
                name="title"
                onChange={handleChange}
            />
            <label> price: </label>
            <input type="text" 
                value={values.price}
                required
                className='p-2 rounded w-full border border-blue-100 block my-4 text-black	'
                name="price"
                onChange={handleChange}
            />
            <label> category: </label>
            <input type="text" 
                value={values.category}
                required
                className='p-2 rounded w-full border border-blue-100 block my-4 text-black	'
                name="category"
                onChange={handleChange}
            />
            <label> Image: </label>
            <input type="file" 
                required
                className='p-2 rounded w-full border border-blue-100 block my-4 text-black	'
                name="image"
                onChange={handleChange}
                accept="image/png, image/jpeg"
            />
            <Button type='submit'>Enviar</Button>

         </form>

    </div>
  )
}
