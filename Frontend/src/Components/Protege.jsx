import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
export default function Protege() {
    
    
 const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  
}
