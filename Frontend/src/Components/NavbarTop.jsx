import React from 'react'
import {FaBars} from "react-icons/fa"
export default function NavbarTop({toggleSidebar}) {
  return (
    <>
        <header className='navbar'>
                <div className='titre'>
                    <FaBars className='bars' onClick={toggleSidebar}/>       
                    <h2>Sekoliko</h2>
                </div>
                <div className='profile'>
                    <h2>H</h2>
                </div>
        </header>
    </>
  )
}
