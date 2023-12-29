"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const  AddPage = () => {
  const router = useRouter()
  const [err,setErr]=useState(false)
  const handleSubmit= async(e)=>{
      e.preventDefault()
      const name = e.target[0].value
      const desc = e.target[1].value
      if(!name || !desc){
        setErr(true)
        return
      }
      try {
        const res = await fetch(`http://localhost:3000/api/post`,{
          cache:"no-store",
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({name,desc})
        })
        if(!res.ok){
          throw new Error("failed to create post")
        }
          router.refresh()
          router.push("/")
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div className='w-[470px] sm:w-[600px] md:w-[748px]  lg:w-[1000px]  mx-auto '> 
        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-7 mt-3 mb-3 h-[calc(100vh-200px)] ' >
            <input type="text" placeholder='Title' className='p-4 border-2 border-cyan-700 rounded-md bg-[whitesmoke] font-bold tracking-wider text-gray-900 outline-none  ' />
            <input type="text" placeholder='Description' className='p-4 border-2 border-cyan-700 rounded-md bg-[whitesmoke] font-bold tracking-wider text-gray-900  outline-none'  />
              {err && <p className='italic text-rose-600 text-sm'>fill form correctly</p>}
            <button type='submit' className='w-44 bg-pink-700 p-3 text-white font-bold capitalize tracking-widest rounded-md hover:bg-pink-600  '>submit post</button>
        </form>
    </div>
  )
}

export default  AddPage