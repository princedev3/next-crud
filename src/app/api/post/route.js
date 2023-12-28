import topic from "@/components/Post"
import connect from "@/components/connect"
import { NextResponse } from "next/server"


export const GET = async()=>{
    try {
        await connect()
        const post = await topic.find()
        return new NextResponse(JSON.stringify(post,{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify("failed to create post",{status:500}))
    }
}

export const POST = async (req)=>{
    const {name,desc}= await req.json()
    try {
        await connect()
        const post = await topic.create({name,desc})
        return new NextResponse(JSON.stringify("post created",{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify("failed to create post",{status:500}))
        
    }
}

