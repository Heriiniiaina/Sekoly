import React,{useEffect, useState} from 'react'
import Sidebar from '../Components/Sidebar'
import "../App.css"
import axios from 'axios'
import NavbarTop from '../Components/NavbarTop'
import { Outlet } from 'react-router-dom'
import { Link,Navigate,useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const [isOpen,setIsOpen] = useState(true)
  const toogleSidebar = ()=>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    if(!sessionStorage.getItem("user"))
      return navigate("/login")
  })
  return (
   <>
    <div className="dashboard">
      <div className={`navigation ${isOpen ? "" : "open"}`}>
        
        <Sidebar/>
      </div>
        
        <div className="dash">
            <NavbarTop toggleSidebar={toogleSidebar}/>
            <div className='dashboard-page'>
              <Outlet />
            </div>
        </div>
    </div>
   
   </>
  )
}
