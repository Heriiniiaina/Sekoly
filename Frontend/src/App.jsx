import React from 'react'
import "./App.css"
import students from "./assets/students.svg"
import { Link } from 'react-router-dom'
export default function App() {
  return <>
      <div className='Home'>
          <div className='Home-image'>
              <img src={students} alt="" />
          </div>
          <div className='Home-text'>
              <div className="title">
                  <h2>Bienvenu sur Sekoliko !</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat facere vero amet laudantium ut. Beatae possimus laudantium aliquid consequuntur totam ipsam illum iusto eum a neque aut, placeat amet!
                  Ab eum consequuntur porro impedit quibusdam at pariatur deleniti consequatur, optio, recusandae ducimus neque! Adipisci, odit tenetur provident dignissimos suscipit earum vero ea, laboriosam nulla velit eum, inventore hic possimus!</p>
              </div>
              <div className="btnLoginAndRegister">
                <div className="btnLogin">
                  <Link to="/login"><button className="btnLoginAdmin">Login</button></Link>
                  <Link to="/"><button className="btnLoginGuest">Login as guest</button></Link>
                </div>
                <div className="btnRegister">
                  <p>Don't have an account ? <Link to="/register"><span>Sign Up</span></Link></p>
                </div>
                
              </div>
            
          </div>  
      </div>
  </>
   
  
}
