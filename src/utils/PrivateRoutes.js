import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

const useAuth=()=>{
  const { user } = useContext(AuthContext);

  if(user){
    return true
  } else {
    return false
  }
}

const PrivateRoutes = () => {
  const auth=useAuth()

  return (
    auth ? <Outlet /> : <Navigate to="/login" />
  )

}

export default PrivateRoutes;