import React,{useEffect, useState} from 'react'
import {TextField, Typography} from "@mui/material"
import "../App.css"
import axios from "axios"
import { Link,Navigate,useNavigate } from 'react-router-dom'
import {toast} from "react-hot-toast"
import LoginImage from "../assets/designlogin.jpg"

import { useAuth } from '../Components/AuthContext'


export default function Login() {
 

  const navigate = useNavigate()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  useEffect(()=>{
   
    if(sessionStorage.getItem("user"))

      navigate("/dashboard")
  })
  const handleSubmit = async(e)=>{
    e.preventDefault()
  
    axios.post("http://localhost:6001/api/admin/login",{email,password}).then(res=>{
      console.log(res)
      toast.success(res.data.message)
      sessionStorage.setItem("user",true)
      navigate("/dashboard")
   
    }).catch(err=>{console.log(err.response.data.message)
      toast.error(err.response.data.message)
      console.log({email,password})
      console.log(err.response.data)
    })


}

  return (
    <>
    <div className="register login">
        <div className='RegisterForm LoginForm'>
            <div className='FormTitle'>
            <h2>Admin Login</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, exercitationem!</p>
            </div>
          
            <form action="" onSubmit={handleSubmit}>
        
                <TextField label="Adresse email" onChange={e=>setEmail(e.target.value)}/>
               
                <TextField label="Mot de passe" onChange={e=>setPassword(e.target.value)} required type="password"/>
                <button type="submit">Login</button>
                <Typography>Vous n'avez pas encore de compte ? <Link  to="/register"><span className='goRegister'>Register</span></Link></Typography>
            </form>
        </div>
        <div className='RegisterImage'>
                <img src={LoginImage} alt="" />
        </div>
    </div>
   </>
  )
}
