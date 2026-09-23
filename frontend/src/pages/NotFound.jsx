import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '64px', color: '#e74c3c', margin: 0 }}>404</h1>
      <h2 style={{ color: '#2d3748' }}>Página no encontrada</h2>
      <p style={{ color: '#718096' }}>La ruta a la que intentas acceder no existe en S Nails.</p>
      <Link to="/dashboard" style={{ color: '#3182ce', fontWeight: 'bold', textDecoration: 'none' }}>
        ← Volver al Dashboard
      </Link>
    </div>
  );
}