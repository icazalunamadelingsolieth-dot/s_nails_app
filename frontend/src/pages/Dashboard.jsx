import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import citasService from '../services/citasService';

const Dashboard = () => {
  const navigate = useNavigate();
  const [citas, setCitas] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCitas = async (searchQuery = '') => {
    setLoading(true);
    try {
      const data = await citasService.getAll(searchQuery);
      setCitas(data);
      setError(null);
    } catch (err) {
      console.error('Error al obtener citas:', err);
      setError('Error al cargar las citas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCitas(search);
  }, [search]);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta cita?')) {
      try {
        await citasService.delete(id);
        fetchCitas(search);
      } catch (err) {
        alert('Error al eliminar la cita.');
      }
    }
  };

  const formatFecha = (fechaStr) => {
    if (!fechaStr) return 'N/A';
    const fecha = new Date(fechaStr);
    return isNaN(fecha.getTime())
      ? fechaStr
      : fecha.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
  };

  return (
    <div style={{
      backgroundColor: '#2b1e17', // Café oscuro profundo para el fondo general
      minHeight: '100vh',
      color: '#fffdd0', // Crema claro para textos generales
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem 1rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        backgroundColor: '#3d2b20', // Café medio para la tarjeta contenedora
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        border: '1px solid #e3c896' // Borde dorado crema
      }}>
        {/* Marca y Encabezado Elegante */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            fontFamily: "'Cinzel', 'Playfair Display', 'Georgia', serif",
            fontSize: '1.1rem',
            letterSpacing: '4px',
            color: '#e3c896', // Dorado crema
            textTransform: 'uppercase',
            fontWeight: '600',
            display: 'block',
            marginBottom: '0.2rem'
          }}>
            S Nails
          </span>
          <h1 style={{
            fontFamily: "'Cinzel', 'Playfair Display', 'Georgia', serif",
            fontSize: '2.3rem',
            fontWeight: '700',
            color: '#ffffff', // Blanco destacado
            letterSpacing: '1px',
            margin: 0,
            textShadow: '0 2px 4px rgba(0,0,0,0.4)'
          }}>
            Panel de Citas
          </h1>
        </div>

        {/* Barra superior con buscador y botón agregar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ flex: '1', minWidth: '260px' }}>
            <input
              type="text"
              placeholder="Buscar por cliente o teléfono..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#231812', // Fondo campo de búsqueda café oscuro
                color: '#ffffff',
                border: '1px solid #e3c896',
                borderRadius: '10px',
                padding: '0.8rem 1rem',
                fontSize: '0.95rem',
                boxSizing: 'border-box',
                outline: 'none'
              }}
            />
          </div>

          <button
            type="button"
            onClick={() => navigate('/citas/nueva')}
            style={{
            backgroundColor: '#e3c896', // Dorado crema
            color: '#2b1e17', // Texto café
            fontWeight: '700',
            padding: '0.8rem 1.6rem',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            + Nueva Cita
          </button>
        </div>

        {/* Estado de Carga / Error / Tabla */}
        {loading ? (
          <p style={{ textAlign: 'center', color: '#e3c896', padding: '2rem' }}>Cargando citas...</p>
        ) : error ? (
          <p style={{ textAlign: 'center', color: '#ff8a8a', padding: '2rem' }}>{error}</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left'
            }}>
              <thead>
                <tr style={{
                  borderBottom: '2px solid #e3c896',
                  backgroundColor: '#4a3629' // Encabezado de tabla café suave
                }}>
                  {['Cliente', 'Teléfono', 'Servicio', 'Fecha', 'Acciones'].map((header, idx) => (
                    <th key={header} style={{
                      padding: '14px 12px',
                      fontFamily: "'Cinzel', 'Playfair Display', 'Georgia', serif",
                      color: '#e3c896', // Dorado crema
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      textAlign: idx === 4 ? 'center' : 'left'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {citas.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#d3c3b9' }}>
                      No se encontraron citas.
                    </td>
                  </tr>
                ) : (
                  citas.map((cita) => (
                    <tr key={cita.id} style={{ borderBottom: '1px solid #4a3629' }}>
                      <td style={{ padding: '14px 12px', color: '#ffffff', fontWeight: '500' }}>{cita.cliente}</td>
                      <td style={{ padding: '14px 12px', color: '#f0e6df' }}>{cita.telefono}</td>
                      <td style={{ padding: '14px 12px', color: '#e3c896', fontWeight: '500' }}>
                        {cita.servicio || 'Sin servicio'}
                      </td>
                      <td style={{ padding: '14px 12px', color: '#f0e6df' }}>{formatFecha(cita.fecha)}</td>
                      <td style={{ padding: '14px 12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                          {/* Botón Editar: Blanco con texto café */}
                          <button
                            type="button"
                            onClick={() => navigate(`/citas/editar/${cita.id}`)}
                            style={{
                            backgroundColor: '#ffffff',
                            color: '#2b1e17',
                            border: 'none',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '0.85rem'
                          }}>
                            Editar
                          </button>
                          {/* Botón Eliminar: Dorado crema con texto café */}
                          <button
                            onClick={() => handleDelete(cita.id)}
                            style={{
                              backgroundColor: '#e3c896',
                              color: '#2b1e17',
                              border: 'none',
                              padding: '6px 14px',
                              borderRadius: '8px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              fontSize: '0.85rem'
                            }}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;