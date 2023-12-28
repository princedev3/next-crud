"use client"
import React, { useState } from 'react'
import {useRouter} from "next/navigation"
const EditPage = ({data,id}) => {


    const [desc,setDesc]= useState(data.desc)
 const [name,setName]= useState(data.name)
  const router = useRouter()
 
 
 
  const handleSubmit =  async(e)=>{
      e.preventDefault()
      try {
        await fetch(`http://localhost:3000/api/post/${id}`,{
          method:"PUT",
          headers:{
            "Content-type":"application/json"
          },
          body: JSON.stringify({name,desc})
        })
      } catch (error) {
        throw new Error("failed to update post")
      }


      router.refresh()
      router.push("/")
  }
  return (
    <div className=' w-[470px] sm:w-[600px] md:w-[748px]  lg:w-[1000px] mx-auto '>
         <form onSubmit={handleSubmit}  action="" className='w-[100%]  flex flex-col gap-7 mt-3 mb-3 h-[calc(100vh-200px)] ' >
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder={"name"} className='p-4 border-2 border-cyan-700 rounded-md bg-[whitesmoke] font-bold tracking-wider text-gray-900 outline-none  ' />
            <input onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" placeholder={"description"} className='p-4 border-2 border-cyan-700 rounded-md bg-[whitesmoke] font-bold tracking-wider text-gray-900  outline-none'  />
            <button type='submit' className='w-44 bg-pink-700 p-3 text-white font-bold capitalize tracking-widest rounded-md hover:bg-pink-600  ' >update post</button>
        </form>
    </div>
  )
}
//w-[470px] sm:w-[600px] md:w-[748px] lg:w-[1024px]
export default EditPage