import mongoose from "mongoose";

const FileCodeSchema = new mongoose.Schema({
    slug:{
        type:String,
        required:true,
        unique:true
    },
    Code:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    isShared:{
        type:Boolean,
        default:false   
    }
})

export default mongoose.models.FileCode || mongoose.model('FileCode',FileCodeSchema);