import React,{useState,Navigator} from 'react'
import {Link, TextField,Typography} from "@mui/material"
import "../App.css"
import axios from "axios"
import {toast} from "react-hot-toast"
import LoginImage from "../assets/designlogin.jpg"
export default function Register() {
const [nom,setNom] = useState()
const [prenom,setPrenom] = useState()
const [email,setEmail] = useState()
const [phone,setPhone] = useState()
const [nomEcole,setNomEcole] = useState()
const [password,setPassword] = useState()

const handleSubmit = async(e)=>{
    e.preventDefault()
  
    axios.post("http://localhost:6001/api/admin/register",{nom,prenom,email,phone,nomEcole,password}).then(res=>{
      console.log(res.data.message)
      toast.success(res.data.message)
   
    }).catch(err=>{console.log(err.response.data.message)
      toast.error(err.response.data.message)
    })


}
  return (
   <>
    <div className="register">
        <div className='RegisterForm'>
            <div className='FormTitle'>
            <h2>Admin Login</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, exercitationem!</p>
            </div>
          
            <form action="" onSubmit={handleSubmit}>
                <TextField label="Nom" size="medium" onChange={e=>setNom(e.target.value)} required/>
                <TextField label="Prenom" onChange={e=>setPrenom(e.target.value)}/>
                <TextField label="Nom de votre école" onChange={e=>setNomEcole(e.target.value)} required/>
                <TextField label="Adresse email" onChange={e=>setEmail(e.target.value)}/>
                <TextField label="Numero de télephone" onChange={e=>setPhone(e.target.value)} required/>
                <TextField label="Mot de passe" onChange={e=>setPassword(e.target.value)} required type="password"/>
                <button type="submit">Register</button>
                <Typography>Vous avez déja de compte ? <Link to="/login"><span className='goLogin'>Login</span></Link></Typography>
            </form>
        </div>
        <div className='RegisterImage'>
                <img src={LoginImage} alt="" />
        </div>
    </div>
   </>
  )
}
