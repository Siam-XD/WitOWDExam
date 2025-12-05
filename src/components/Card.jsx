import React from 'react'
import { IoIosStar } from "react-icons/io";

const Card = ({product, handleBuy}) => {
    const stars = [<IoIosStar className='text-amber-600' />, <IoIosStar className='text-amber-600' />, <IoIosStar className='text-amber-900' />, <IoIosStar className='text-amber-900' />, <IoIosStar className='text-amber-900' />];
  return (
    <div className='bg-slate-950 rounded-3xl flex flex-col items-center text-[#c9c9c9] pt-14 pb-10'>
        <img className='mb-1.5' src={product.src} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: {product.price} TK</p>
        <div className='flex text-2xl mt-5'>{stars}</div>
        <button onClick={() => handleBuy(product)} className='bg-indigo-500 rounded-lg text-black px-3 py-2 font-semibold mt-2'>Buy Now</button>
    </div>
  )
}

export default Card