import topic from "@/components/Post"
import connect from "@/components/connect"
import { NextResponse } from "next/server"

 

 export const GET = async(req,{params})=>{
    const {id} = params
  
    try {
        await connect()
         const post = await topic.findById(id)
         console.log(post)
        return new NextResponse(JSON.stringify(post,{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify("failed to deleted post"))
    }

 }

 
 export const DELETE = async(req,{params})=>{
    const {id} = params
  
    try {
        await connect()
         await topic.findByIdAndDelete(id)
        
        return new NextResponse(JSON.stringify("topic deleted",{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify("failed to deleted post"))
    }

 }
 export const PUT = async(req,{params})=>{
    const {id} = params
    const {name,desc} = await req.json()
    try {
        await connect()
         await topic.findByIdAndUpdate(id, {name,desc})
        console.log("post")
        return new NextResponse(JSON.stringify("post updated",{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify("failed to deleted post"))
    }

 }
