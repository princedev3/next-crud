import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-auto w-[470px] sm:w-[600px] md:w-[748px]  lg:w-[1000px] bg-gray-900 h-[80px] mt-2 flex items-center justify-around uppercase '>
        <Link href={"/"}className='  cursor-pointer font-bold text-slate-50 tracking-widest ' >marvin</Link>
        <Link href={"/add"} className=' cursor-pointer font-bold text-emerald-700 bg-white px-3 rounded-md py-2 tracking-widest uppercase hover:text-slate-100  hover:bg-slate-600' >Add Topic</Link>
    </div>
  )
}

export default Navbar