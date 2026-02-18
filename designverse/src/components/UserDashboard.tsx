import React from 'react'
import connectDb from '@/lib/db'
import ProductItemCard from './ProductItemCard'
import { IProduct } from '@/models/product.model'
import HeroSection from './HeroSection'

async function UserDashboard({productList}:{productList:IProduct[]}) {
await connectDb()
const plainProduct = JSON.parse(JSON.stringify(productList))

  return (
    <>
      <HeroSection/>
      <div className='w-[90%] md:w-[80%] mx-auto mt-10'>
        <h2 className='text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center'>Popular Grocery Items</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {plainProduct.map((item:any,index:number)=>(
        <ProductItemCard key={index} item={item}/>
      ))}
      </div>

      </div>
     
    </>
  )
}

export default UserDashboard