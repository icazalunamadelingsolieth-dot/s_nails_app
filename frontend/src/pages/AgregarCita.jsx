import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import citasService from '../services/citasService';

const NuevaCita = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cliente: '',
    telefono: '',
    servicio: 'Manicura Gel',
    fecha: ''
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      await citasService.create(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'No se pudo guardar la cita.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{
      backgroundColor: '#2b1e17', // Fondo general café oscuro profundo
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* TARJETA CONTENEDORA PRINCIPAL */}
      <div style={{
        backgroundColor: '#3d2b20', // Fondo café medio
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        width: '100%',
        maxWidth: '520px',
        boxShadow: '0 12px 35px rgba(0,0,0,0.5)',
        border: '1px solid #e3c896' // Borde dorado crema
      }}>
        {/* TITULO PRINCIPAL */}
        <h1 style={{
          fontFamily: "'Cinzel', 'Playfair Display', 'Georgia', serif",
          fontSize: '2rem',
          fontWeight: '700',
          color: '#ffffff', // Blanco
          textAlign: 'center',
          margin: '0 0 1.8rem 0',
          letterSpacing: '1px'
        }}>
          Agendar Nueva Cita
        </h1>

        {/* MARCO INTERNO DEL FORMULARIO */}
        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#231812', // Café más oscuro para contraste
          borderRadius: '16px',
          padding: '1.8rem 1.5rem',
          border: '1px solid #4a3629',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}>
          {error && (
            <div style={{
              backgroundColor: '#5c2525',
              color: '#ffd6d6',
              border: '1px solid #ff8a8a',
              borderRadius: '8px',
              padding: '0.75rem',
              fontSize: '0.9rem'
            }}>
              {error}
            </div>
          )}

          {/* CAMPO: NOMBRE DEL CLIENTE */}
          <div>
            <label style={{
              display: 'block',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.4rem'
            }}>
              Nombre del Cliente:
            </label>
            <input
              type="text"
              name="cliente"
              placeholder="Ej. María López"
              value={formData.cliente}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                backgroundColor: '#3d2b20',
                color: '#ffffff',
                border: '1px solid #e3c896', // Dorado crema
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* CAMPO: TELÉFONO */}
          <div>
            <label style={{
              display: 'block',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.4rem'
            }}>
              Teléfono:
            </label>
            <input
              type="text"
              name="telefono"
              placeholder="Ej. 8888-8888"
              value={formData.telefono}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                backgroundColor: '#3d2b20',
                color: '#ffffff',
                border: '1px solid #e3c896',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* CAMPO: SERVICIO */}
          <div>
            <label style={{
              display: 'block',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.4rem'
            }}>
              Servicio:
            </label>
            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              style={{
                width: '100%',
                backgroundColor: '#3d2b20',
                color: '#ffffff',
                border: '1px solid #e3c896',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
                cursor: 'pointer'
              }}
            >
              <option value="Manicura Gel">Manicura Gel</option>
              <option value="Manicura Clásica">Manicura Clásica</option>
              <option value="Uñas en Gel">Uñas en Gel</option>
              <option value="Diseño Especial">Diseño Especial</option>
            </select>
          </div>

          {/* CAMPO: FECHA DE CITA */}
          <div>
            <label style={{
              display: 'block',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.4rem'
            }}>
              Fecha de Cita:
            </label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                backgroundColor: '#3d2b20',
                color: '#ffffff',
                border: '1px solid #e3c896',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
                colorScheme: 'dark' // Para que el icono del calendario combine bien
              }}
            />
          </div>

          {/* BOTÓN GUARDAR CITA */}
          <button
            type="submit"
            disabled={saving}
            style={{
              backgroundColor: saving ? '#9f8c65' : '#e3c896', // Dorado crema
              color: '#2b1e17',           // Texto café
              fontWeight: '700',
              padding: '0.85rem',
              borderRadius: '10px',
              border: 'none',
              cursor: saving ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              marginTop: '0.8rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            {saving ? 'Guardando...' : 'Guardar Cita'}
          </button>

          {/* BOTÓN CANCELAR Y VOLVER */}
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff', // Texto blanco
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.9rem',
              textDecoration: 'underline',
              textAlign: 'center',
              marginTop: '0.2rem'
            }}
          >
            Cancelar y Volver
          </button>
        </form>
      </div>
    </div>
  );
};

export default NuevaCita;