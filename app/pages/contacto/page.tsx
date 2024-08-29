import React from 'react'
import ContacForm from '@/app/components/contacto/ContactForm'

const Contacto = () => {
  return (
    <>
      <main className=' w-[80%] mx-auto'>
        <h1 className='text-4xl text-blue-600 my-4'>
          Contacto
        </h1>
        <ContacForm/>
      </main>
    </>
  )
}

export default Contacto