import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import img1 from './1.jpg'

function UpdateUser() {
    const {id}=useParams()
    const [empid,setEmpid]=useState(0)
    const [name,setName]=useState('')
    const [designation,setDesignation]=useState('')
    const navigate=useNavigate()
    const containerStyle= {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
}
    useEffect(()=>
    {
        axios.get("http://localhost:4000/getUser/"+id)
        .then(result=>{
            console.log(result)
            setEmpid(result.data.empid)
            setName(result.data.name)
            setDesignation(result.data.designation)
        })
        .catch(err=>console.log(err))
    },[])

    const Update=(e)=>
    {
        e.preventDefault()
        axios.put("http://localhost:4000/updateUser/"+id,{empid,name,designation})
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="containerStyle"  style={containerStyle}>

<div  className="d-flex vh-100  justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        <form className='form' onSubmit={Update}>
            <div className='mb-2'>
                <label>EmpId:</label>
                <input type="Number" className="form-control"
                value={empid} onChange={(e)=>setEmpid(e.target.value)}></input>
            </div>

            <div className='mb-2'>
                <label>Name:</label>
                <input type="text" className="form-control"
                value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>

            <div className='mb-2'>
                <label>Designation</label>
                <input type="text" className="form-control"
                value={designation} onChange={(e)=>setDesignation(e.target.value)}></input>
            </div>
            <button className="btn btn-success">Submit</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default UpdateUser