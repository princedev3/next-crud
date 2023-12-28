import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-[470px] sm:w-[600px] md:w-[748px]  lg:w-[1000px] mx-auto h-[80px] bg-gray-900 flex items-center justify-around '>
      <div className='flex  flex-col items-center gap-3 '>
           <h2 className='self-start text-white capitalize tracking-widest font-bold'>marvin</h2> 
            <p  className='text-white capitalize tracking-widest font-bold text-xl'>© <span className="italic text-base">All Right Reserved</span></p>
      </div>
        <div  className='flex items-center gap-3 '>
          <Image  className='opacity-70' src={"/facebook.png"} width={15} height={15} alt=''/>
          <Image className='opacity-70'  src={"/instagram.png"} width={15} height={15} alt=''/>
          <Image  className='opacity-70' src={"/youtube.png"} width={15} height={15} alt=''/>
        </div>
    </div>
  )
}

export default Footer