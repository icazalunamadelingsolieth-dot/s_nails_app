import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  // Simulamos el estado de autenticación (cambiar a false para probar la redirección al login)
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}