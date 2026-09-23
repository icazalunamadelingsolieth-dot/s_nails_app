import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [credenciales, setCredenciales] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login', credenciales);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="card">
      <h2>S Nails</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.5rem', marginTop: '-1rem' }}>
        Acceso Administrador
      </p>

      <form onSubmit={handleSubmit} style={{ border: 'none', padding: 0, boxShadow: 'none', background: 'transparent' }}>
        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: '600' }}>
          Correo electrónico
        </label>
        <input 
          type="email" 
          placeholder="admin@snails.com" 
          value={credenciales.email}
          onChange={e => setCredenciales({...credenciales, email: e.target.value})} 
          required 
        />

        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: '600' }}>
          Contraseña
        </label>
        <input 
          type="password" 
          placeholder="••••••••" 
          value={credenciales.password}
          onChange={e => setCredenciales({...credenciales, password: e.target.value})} 
          required 
        />

        <button type="submit" style={{ marginTop: '0.5rem' }}>
          Entrar
        </button>
      </form>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1.5rem 0' }} />

      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
          ¿Necesitas un nuevo acceso?
        </p>
        <button
          type="button"
          onClick={() => navigate('/registro')}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--primary)',
            border: '1px solid var(--primary)',
          }}
        >
          Crear Usuario
        </button>
      </div>
    </div>
  );
}