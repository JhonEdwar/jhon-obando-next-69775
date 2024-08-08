'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingBagIcon,HeartIcon, UserIcon } from '@heroicons/react/24/solid'
import CounterCart from './CounterCart';
import ShoppingButton from './ShoppingButton';
import { useState } from 'react';

const Header= () => {
   const[count, setCount]=useState(0)
   const sumCount=()=>{
    console.log('test')
    setCount(count+1)
   }

  return (
    <div className="h-[13vh] bg-gray-800 sticky	top-0 z-10">
      <div className="w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={140} height={140} />
          </Link>
        </div>
        <div className="h-[50%] hidden flex-[0.7] overflow-hidden bg-gray-200 rounded-md md:flex items-center">
          <input
            type="text"
            placeholder="Buscar juego (ej. Call of Duty)"
            className="block pl-[0.5rem] w-[90%] outline-none mx-auto h-[100%] bg-gray-200"
          />
          <MagnifyingGlassIcon className="w-[1.8rem] h-[1.8rem] mr-[1.4rem] cursor-pointer" />
        </div>
        
        <div className="flex items-center justify-center space-x-8">
        <Link href="/pages/nosotros" className="font-bold text-white">Nosotros</Link>
        <Link href="/pages/contacto" className="font-bold text-white">Contacto</Link>
        <div className="relative">
          <ShoppingButton onClick={sumCount}/> 
          <CounterCart>
            {count}
          </CounterCart>
        </div>
          <HeartIcon className="w-[2rem] h-[2rem] text-white cursor-pointer" />
          <UserIcon className="w-[2rem] h-[2rem] text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;