
"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdOutlineDeleteSweep } from "react-icons/md";
import { MdMovieEdit } from "react-icons/md";
import useSWR from 'swr';



const PostList = () => {
  
  const [openDelete,setOpenDelete] = useState(false)

  const router = useRouter()
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const {data,mutate,error,isLoading}=useSWR(`/api/post`,
  fetcher
)
  const handleClose= (e)=>{
    e.stopPropagation()
    setOpenDelete(false)
  }
const handleDelete = async (e,id)=>{
  e.stopPropagation()
  
 try {
  const res = await fetch(`http://localhost:3000/api/post/${id}`,{
    cache:"no-store",
    method:"DELETE",
    headers:{
      "Context-type":"application/json"
    }
  })

  setOpenDelete(false)
  mutate()
 } catch (error) {
  console.log("failed to delete")
  throw new Error(error)
 }
}
//w-[1000px]
  return (
    <div className='w-[470px] sm:w-[600px] md:w-[748px]  lg:w-[1000px]  mx-auto min-h-[calc(100vh-200px)] '>

          {
            data?.map(item=>(
              <div key={item._id} className='border border-cyan-200 mt-6 mb-4 flex flex-col p-4 rounded-md h-auto'>
            <div className='flex justify-between items-center mb-2  w-[100%] border-b border-slate-200'>
                <h2 className='text-lg font-semibold tracking-wider'>{item.name} </h2>
                <div className='flex gap-4 text-xl' >
                <MdOutlineDeleteSweep className='text-red-600' onClick={()=>setOpenDelete(true)} />
                {
                  openDelete && <div onClick={handleClose}   className='z-10 absolute left-0 top-0 bg-black/[0.4] w-[100%] h-[100%] flex items-center justify-center '>
                    <div className='z-30 bg-slate-50 p-6 flex flex-col justify-between rounded-md' >
                        <p className='mb-3  text-base cursor-pointer'>are you sure?</p>
                        <div  className='flex items-center justify-between text-base cursor-pointer' >
                         <p>no</p>
                          <p onClick={(e)=>handleDelete(e,item._id)}>Yes</p>
                        </div>
                    </div>
                  </div>
                }
                <Link href={`/edit/${item._id}`}>
                 <MdMovieEdit />
                </Link>
                </div>
            </div>
          <p className='max-w-[100%] whitespace-pre-wrap break-words text-wrap '>{item.desc} </p>
        </div>
              
              ))
          }  
    </div>
  )
}

export default PostList