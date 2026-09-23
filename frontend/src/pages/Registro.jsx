import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Registro() {
  const [usuario, setUsuario] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/register', usuario);
      alert('Usuario creado con éxito');
      navigate('/login');
    } catch (error) {
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className="card">
      <h2>S Nails</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.5rem', marginTop: '-1rem' }}>
        Crear Nueva Cuenta
      </p>

      <form onSubmit={handleSubmit} style={{ border: 'none', padding: 0, boxShadow: 'none', background: 'transparent' }}>
        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: '600' }}>
          Nombre Completo
        </label>
        <input 
          type="text" 
          placeholder="Ej. María Pérez" 
          value={usuario.name}
          onChange={e => setUsuario({...usuario, name: e.target.value})} 
          required 
        />

        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: '600' }}>
          Correo electrónico
        </label>
        <input 
          type="email" 
          placeholder="correo@ejemplo.com" 
          value={usuario.email}
          onChange={e => setUsuario({...usuario, email: e.target.value})} 
          required 
        />

        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: '600' }}>
          Contraseña
        </label>
        <input 
          type="password" 
          placeholder="••••••••" 
          value={usuario.password}
          onChange={e => setUsuario({...usuario, password: e.target.value})} 
          required 
        />

        <button type="submit" style={{ marginTop: '0.5rem' }}>
          Registrar
        </button>
      </form>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1.5rem 0' }} />

      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          onClick={() => navigate('/login')}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--primary)',
            border: '1px solid var(--primary)',
          }}
        >
          Volver al Login
        </button>
      </div>
    </div>
  );
}