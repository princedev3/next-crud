import mongoose from "mongoose";


const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected")
    } catch (error) {
        console.log(error)
        throw new Error("failed to connect mongo")
    }
}

export default connect