import {useState,React}  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Signup = () => {
    const[name,setName]= useState()
    const[email,setEmail] = useState()
    const[password,setPassword]= useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3008/register',{name,email,password})
        .then((result)=>console.log(result))
        .catch((err)=>console.log(err))
        navigate('/login')
    }





  return (
    <div className="d-flex justify-content-center align-items-center vh-100 wh-100">
        <div className="bg-white p-5 rounded w-55">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text"
                    placeholder="Enter name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e)=>setName(e.target.value)}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email"
                    placeholder="enter email"
                    autoComplete="off"
                    name="email"
                    className='form-control rounded-0'
                    onChange={(e)=>setEmail(e.target.value)}/>



                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password"
                    placeholder="enter password"
                    autoComplete="off"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e)=>setPassword(e.target.value)}/>

                </div>

                <button type="submit" className='btn btn-success w-100 rounded-0'>Register</button>
                </form>
                <p>Already have an Account</p>

                <Link to="/login" className="btn btn-default border w-100 bg-light text decoration-none rounded-0">Login</Link>













         
        </div>
      
    </div>
  )
}

export default Signup
