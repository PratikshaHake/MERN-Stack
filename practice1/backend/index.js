const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
const Emp=require('./models/Employee')
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/practice1")

app.get("/",(req,res)=>
{
    Emp.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.get("/getUser/:id",(req,res)=>
{
    const id=req.params.id
    Emp.findOne({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put("/updateUser/:id",(req,res)=>
{
    const id=req.params.id
    Emp.findOneAndUpdate({_id:id},{empid:req.body.empid, name:req.body.name, designation:req.body.designation})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


app.delete("/deleteUser/:id",(req,res)=>
{
    const id=req.params.id
    Emp.findOneAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))

})
app.post("/createUser",(req,res)=>
{
    Emp.create(req.body)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(4000,()=>
{
    console.log("server is listening....")
})
