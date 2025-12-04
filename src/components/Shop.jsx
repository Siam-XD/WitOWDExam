import React from 'react'
import Card from './Card'
import Container from './Container'

const Shop = ({products}) => {
  return (
    <section className='py-20'>
        <Container>
            <h2 className='text-2xl font-bold text-[#747474] mb-3'>Super Shop</h2>
            <div className='flex gap-12'>
                <div className="grid grid-cols-3 gap-12 w-[70%]">
                    {products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
                <div className='w-30% flex flex-col gap-6'>
                    <div className='rounded bg-gray-300 p-4'>
                        <h4 className='font-bold text-lg'>Have coupon?</h4>
                        <input className=' bg-gray-700 rounded-l-lg px-3 py-1 mt-2 text-white' type="text" placeholder='Enter your coupon code' />
                        <button className='bg-[#ff2e78] text-white rounded-r-md px-2 py-1 font-medium'>Apply</button>
                    </div>
                    <div className='rounded bg-gray-300 p-4'>
                        <ul>
                            <li>product</li>
                        </ul>
                        <button className='bg-[#ff2e78] text-white rounded-md w-full py-1 font-semibold'>Make Purchase</button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Shop