"use client"
import EditPage from '@/components/EditPage'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const getData = async (id)=>{
  const res = await fetch(`http://localhost:3000/api/post/${id}`,{
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("failed to fetch single post")
  }

  return res.json()
 }

const UpdatePage =async({params}) => {
  const {id} =  params
  
 const data = await getData(id)


 

  
  return (
    <div className='w-[470px] sm:w-[600px] md:w-[748px]  lg:w-[1000px] mx-auto'>
        <EditPage data={data} id={id} />
    </div>
  )
}

export default UpdatePage