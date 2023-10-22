import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// protección publica
function ProtectedRouter() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return userInfo?.token ? <Outlet /> : <Navigate to="/registation" />;
}

export { ProtectedRouter };
