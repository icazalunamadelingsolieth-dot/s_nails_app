import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import AgregarCita from '../pages/AgregarCita';
import EditarCita from '../pages/EditarCita';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/citas/nueva" element={<AgregarCita />} />
      <Route path="/citas/editar/:id" element={<EditarCita />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}