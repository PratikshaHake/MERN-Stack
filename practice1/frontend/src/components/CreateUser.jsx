import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import img1 from './1.jpg'

function CreateUser() {
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

    const Submit=(e)=>
    {
         e.preventDefault()
         axios.post("http://localhost:4000/createUser",{empid,name,designation})
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
        <form className='form' onSubmit={Submit}>
            <div className='mb-2'>
                <label>EmpId:</label>
                <input type="Number" className="form-control"
                onChange={(e)=>setEmpid(e.target.value)} placeholder='Eneter employee id'></input>
            </div>

            <div className='mb-2'>
                <label>Name:</label>
                <input type="text" className="form-control"
                onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
            </div>

            <div className='mb-2'>
                <label>Designation</label>
                <input type="text" className="form-control"
                onChange={(e)=>setDesignation(e.target.value)} placeholder="Enter your designation"></input>
            </div>
            <button className="btn btn-success">Submit</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default CreateUser