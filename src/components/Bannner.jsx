import React from 'react'
import Container from './Container'
import bannerimg from '../assets/summer1.png'

const Bannner = () => {
  return (
    <section className='bg-[#FFFDD0]'>
        <Container>
            <div className='flex justify-between items-center py-8'>
                <div>
                    <h3 className='text-lg font-bold text-[#747474]'>---SALE FEVER---</h3>
                    <h1 className='text-5xl font-extrabold text-[#a5a9b1] w-[60%] my-5'>Purchase TK 200 or above & get <span className='text-[#ff2e78]'>20% off</span></h1>
                    <div className='font-medium flex gap-1.5 items-center'><p className='text-base text-[#9aa0a8]'>Use Promo Code</p><button className='text-base text-[#ffff] bg-[#ff2e78] py-1 px-3 rounded'>SELL200</button></div>
                </div>
                <div>
                    <img src={bannerimg} alt="20% off Sale" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Bannner