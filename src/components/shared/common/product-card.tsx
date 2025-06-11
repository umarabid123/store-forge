import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='  mr-5 '>
        <div>
            <Image src={'/assets/eid1.webp'} alt='eid dress' height={250} width={230} className='h-87 '/>
        </div>
        <p className='uppercase font-semibold text-md text-center'>
            checked casual shirt navy 
        </p>
        <div className='flex justify-evenly text-md'> 
            <span className='text-red-500'>Rs.3,146.50 </span>
            <span className='line-through'>Rs.4,495.00</span>
            
        </div>
        
    </div>
  )
}

export default ProductCard