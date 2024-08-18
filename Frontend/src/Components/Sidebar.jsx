import { Typography } from '@mui/material'
import React from 'react'
import {FaHome,FaBars,FaRegUser,FaUserFriends,FaUserPlus,FaUserMinus,FaUserTie,FaBook,FaLandmark,FaRegShareSquare} from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className='sidebar'>
        <div className='sidebar-element'>
            <Link to="/dashboard">
            <div className="sibar-item">
                <FaHome className='icon'/>
                <Typography className="sidebar-item-text">Home</Typography>
            </div>
            </Link>
          
            <div className="sibar-item">
                <FaLandmark className='icon'/>
                <Typography className="sidebar-item-text">Classes</Typography>
            </div>
            <div className="sibar-item">
                <FaBook className='icon'/>
                <Typography className="sidebar-item-text">Matieres</Typography>
            </div>
            <div className="sibar-item">
                <FaUserTie className='icon'/>
                <Typography className="sidebar-item-text">Profs</Typography>
            </div>
            <Link to="/dashboard/etudiant">
            <div className="sibar-item">
                <FaUserFriends className='icon'/>
                <Typography className="sidebar-item-text">Etudiants</Typography>
            </div>
            </Link>
            
            <div className="sibar-item"></div>
        </div>
    </nav>
    
  )
}
