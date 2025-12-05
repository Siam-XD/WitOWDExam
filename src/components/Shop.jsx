import React, { useState } from 'react'
import Card from './Card'
import Container from './Container'
import prod1 from '../assets/prod1.png'
import prod2 from '../assets/prod2.png'
import prod3 from '../assets/prod3.png'
import prod4 from '../assets/prod4.png'
import prod5 from '../assets/prod5.png'
import prod6 from '../assets/prod6.png'

const products = [
    { id: 1, name: 'Chamos Set', price: 500, src: prod1 },
    { id: 2, name: 'K. Accessories', price: 600, src: prod2 },
    { id: 3, name: 'Home Cooker', price: 600, src: prod3 },
    { id: 4, name: 'Cap', price: 800, src: prod4 },
    { id: 5, name: 'Dress', price: 700, src: prod5 },
    { id: 6, name: 'Shoes', price: 900, src: prod6 },
  ]

const Shop = () => {
    const [cart, setCart] = useState([])
    const [discount, setDiscount] = useState(false)
    const [coupon, setCoupon] = useState('')

    const handleBuy = product => {
        setCart([...cart, product])
    }
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
    }
   const handleDiscount = (e) => {
    e.preventDefault()
    if(coupon === 'SELL200'){
        setDiscount(true)
    }
    else alert('Invalid Coupon')
   }
  return (
    <section className='py-20'>
        <Container>
            <h2 className='text-2xl font-bold text-[#747474] mb-3'>Super Shop</h2>
            <div className='flex gap-12'>
                <div className="grid grid-cols-3 gap-12 w-[70%]">
                    {products.map((product) => (
                        <Card handleBuy={handleBuy} key={product.id} product={product} />
                    ))}
                </div>
                <div className='w-30% flex flex-col gap-6'>
                    <div className='rounded bg-gray-300 p-4'>
                        <h4 className='font-bold text-lg'>Have coupon?</h4>
                        <form onSubmit={handleDiscount}>
                            <input value={coupon} onChange={e => setCoupon(e.target.value)} className=' bg-gray-700 rounded-l-lg px-3 py-1 mt-2 text-white' type="text" placeholder='Enter your coupon code' />
                            <button type='submit' className='bg-[#ff2e78] text-white rounded-r-md px-2 py-1 font-medium'>Apply</button>
                        </form>
                    </div>
                    <div className='rounded bg-gray-300 p-4'>
                        <ul className='ps-5'>
                            {cart.map((item) => (
                                <li className='font-semibold list-disc' key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                        <h5>Total Price: {totalPrice}</h5>
                        <h5>Discount {discount? totalPrice * 0.2: 0}</h5>
                        <h5>Total: {discount? totalPrice - totalPrice * 0.2:  totalPrice} </h5>
                        <button onClick={handlePurchase} className='bg-[#ff2e78] text-white rounded-md w-full py-1 font-semibold'>Make Purchase</button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Shop