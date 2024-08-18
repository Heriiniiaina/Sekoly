import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import App from "./App.jsx"
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import Dashboard from './Pages/Dashboard.jsx'
import Protege from './Components/Protege.jsx'
import Home from './Pages/Dashboard/Home.jsx'
import Etudiants from './Pages/Dashboard/Etudiants.jsx'
import { AuthProvider,useAuth } from './Components/AuthContext.jsx'
import AddEtudiant from './Pages/AddEtudiant.jsx'
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};
const rootes = createBrowserRouter([
    {
      path:"/",
      element: <App/>
    },
    {
      path:"/login",
      element:
  
        <Login/>
     
         
   
    },
    {
      path: "/register",
      element: 
      
         <Register/>
      
     
    },
    {
      path: "/dashboard",
      element:
       
          <Dashboard/>
       
          ,

      children:[
        {
          path:"",
          element:
         
              <Home/>
        
        ,
          
        },
        {
          path:"etudiant",
          element: 
                <Etudiants/>
        },
        {
          path:"etudiant/add",
          element:<AddEtudiant/>
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Toaster/>
      <RouterProvider router={rootes}/>

  
  </StrictMode>,
)
