'use client'
import { useState } from "react"
import BotonSecondary from "../ui/Button" 

import React from 'react'

const ContacForm = () => {
    const[values,setValues]=useState({
        email:'',
        text:''
    })

    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit= async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        await fetch('http://localhost:3000/api/contacto',
        {
            method:'POST',
            body:JSON.stringify(values)
        })
    }

  return (
    <form onSubmit={handleSubmit} className="my-12">
        <input 
        type="email"
        required
        placeholder="tu email"
        className="p2 rounded w-1/2 border border-blue-100 block my-4 text-slate-950	"
        name="email"
        onChange={handleChange} />

        <textarea 
        required
        placeholder="tu mensaje"
        className="resize-none w-1/2 h-24 p-2 rounded border border-blue-100 block my-4 text-slate-950	"
        name="text"
        onChange={handleChange} />

        <button type="submit">enviar</button>

    </form>
  )
}

export default ContacForm