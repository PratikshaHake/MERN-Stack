import React from 'react';
import {useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
import img1 from './1.jpg'

function Users() {

    const containerStyle= {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
}
    const [users, setUsers]=useState([])
     const {id}=useParams()
    useEffect(()=>
    {
        axios.get('http://localhost:4000')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))

    },[])
   const handleDelete=(id)=>
   {
    axios.delete("http://localhost:4000/deleteUser/"+id)
    .then(result=>{
      console.log(result)
      window.location.reload()
    })
   }
    
  return (
    <div className="containerStyle"  style={containerStyle}>
    <div  className="d-flex vh-100  justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className='btn btn-success' align="right">Add+</Link>
            <table className='table'>
                <thead className='table table-dark'>
                    <tr>
                        <th>Empid</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>
                        {
                          return  <tr>
                                <td>{user.empid}</td>
                                <td>{user.name}</td>
                                <td>{user.designation}</td>
                                <td>
                                <Link to={`/update/${user._id}`} className='btn btn-success' align="right">Edit</Link>   
                                <button className='btn btn-danger'
                                onClick={(e)=>handleDelete(user._id)}> Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    </div>
    </div>
  )
}

export default Users;