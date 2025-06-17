import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import API from '../utils/axios';

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    API.get('/me')
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <p>Loading...</p>;
  if (!auth) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
