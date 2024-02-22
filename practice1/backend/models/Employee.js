const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema(
    {
        empid:Number,
        name:String,
        designation:String
    }
)

const Employee=mongoose.model("Employee",UserSchema)
module.exports=Employee