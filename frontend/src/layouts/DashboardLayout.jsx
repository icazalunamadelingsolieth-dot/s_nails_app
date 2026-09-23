import { Outlet, NavLink } from 'react-router-dom';

export default function DashboardLayout() {
  // Simulación de permisos asignados al usuario autenticado
  const permisosUsuario = ['citas.ver', 'citas.crear'];

  // Array declarativo de navegación
  const menu = [
    { to: '/dashboard', label: 'Dashboard', permiso: 'citas.ver' },
    { to: '/agregar-cita', label: 'Agregar Cita', permiso: 'citas.crear' },
    { to: '/login', label: 'Cerrar Sesión', permiso: null },
  ];

  // Renderizado dinámico condicionado por permisos
  const menuFiltrado = menu.filter(
    (item) => !item.permiso || permisosUsuario.includes(item.permiso)
  );

  const linkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '10px 16px',
    color: isActive ? '#40e0d0' : '#ffffff',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
    borderRadius: '6px',
    marginBottom: '8px'
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '220px', background: '#2c3e50', padding: '20px', color: '#fff' }}>
        <h2 style={{ color: '#ffb6c1', marginTop: 0 }}>S Nails</h2>
        <nav style={{ marginTop: '30px' }}>
          {menuFiltrado.map((item) => (
            <NavLink key={item.to} to={item.to} style={linkStyle}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '30px', background: '#f7fafc' }}>
        <Outlet />
      </main>
    </div>
  );
}