import React from 'react'
import { ProductsTable } from '../components/admin/ProductsTable'

const Admin = () => {
  return (
    <div className="container m.auto mt-6">
        <h2 className='text-2xl my-10 border-b pd-4'>panel administración</h2>
        <ProductsTable/>  
    </div>
  )
}

export default Admin