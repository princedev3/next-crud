 import mongoose,{Schema} from "mongoose";


 const postSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
 },{timestamps:true})

const topic =  mongoose.models.Topic || mongoose.model("Topic",postSchema)

export default topic

