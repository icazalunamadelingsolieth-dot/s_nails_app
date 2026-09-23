import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditarCita = ({ citaInicial, onActualizar }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cliente: '',
    telefono: '',
    servicio_id: '',
    fecha: ''
  });

  useEffect(() => {
    if (citaInicial) {
      setFormData({
        cliente: citaInicial.cliente || '',
        telefono: citaInicial.telefono || '',
        servicio_id: citaInicial.servicio_id || citaInicial.servicio?.id || '',
        fecha: citaInicial.fecha ? citaInicial.fecha.substring(0, 10) : ''
      });
    }
  }, [citaInicial]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onActualizar) onActualizar(formData);
  };

  return (
    <div style={{
      backgroundColor: '#2b1e17', // Fondo café oscuro profundo
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* TARJETA CONTENEDORA PRINCIPAL */}
      <div style={{
        backgroundColor: '#3d2b20', // Café medio
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        width: '100%',
        maxWidth: '520px',
        boxShadow: '0 12px 35px rgba(0,0,0,0.5)',
        border: '1px solid #e3c896' // Borde dorado crema
      }}>
        {/* TÍTULO PRINCIPAL */}
        <h1 style={{
          fontFamily: "'Cinzel', 'Playfair Display', 'Georgia', serif",
          fontSize: '2rem',
          fontWeight: '700',
          color: '#ffffff', // Blanco
          textAlign: 'center',
          margin: '0 0 1.8rem 0',
          letterSpacing: '1px'
        }}>
          Editar Cita
        </h1>

        {/* MARCO INTERNO DEL FORMULARIO */}
        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#231812', // Café más oscuro para el área interna
          borderRadius: '16px',
          padding: '1.8rem 1.5rem',
          border: '1px solid #4a3629',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}>
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
              placeholder="Ej. Angelica"
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
              placeholder="Ej. 99886677"
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
              name="servicio_id"
              value={formData.servicio_id}
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
              <option value="1">Manicura Gel</option>
              <option value="2">Manicura Clásica</option>
              <option value="3">Uñas en Gel</option>
              <option value="4">Diseño Especial</option>
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
                colorScheme: 'dark' // Para que el icono del calendario combine adecuadamente
              }}
            />
          </div>

          {/* BOTÓN ACTUALIZAR CITA */}
          <button
            type="submit"
            style={{
              backgroundColor: '#e3c896', // Dorado crema
              color: '#2b1e17',           // Texto café
              fontWeight: '700',
              padding: '0.85rem',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '0.8rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            Actualizar Cita
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

export default EditarCita;