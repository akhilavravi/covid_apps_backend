const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        phnNo:{
            type:String,
            required:true
        }, 
        Address:{
            type:String,
            required:true
        },
        symtoms:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("patient",patientSchema)