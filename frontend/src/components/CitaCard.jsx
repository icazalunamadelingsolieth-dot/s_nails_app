import { Link } from 'react-router-dom';

export default function CitaCard({ cita, onEliminar }) {
  const estadoColor = cita.estado === 'Confirmada' ? '#2ecc71' : '#f39c12';

  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', marginBottom: '12px', background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, color: '#2d3748' }}>{cita.cliente}</h3>
        <span style={{ background: estadoColor, color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
          {cita.estado}
        </span>
      </div>

      <p style={{ margin: '8px 0', color: '#4a5568', fontSize: '14px' }}>
        <strong>Teléfono:</strong> {cita.telefono} | <strong>Servicio:</strong> {cita.servicio}
      </p>

      <p style={{ margin: '4px 0', fontSize: '14px', color: '#718096' }}>
        📅 {cita.fecha} — 🕒 {cita.hora}
      </p>

      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        {/* Botón de edición con ruta dinámica */}
        <Link 
          to={`/editar-cita/${cita.id}`} 
          style={{ background: '#3182ce', color: '#fff', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px' }}
        >
          Editar
        </Link>

        <button
          onClick={() => onEliminar(cita.id)}
          style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
        >
          Cancelar Cita
        </button>
      </div>
    </div>
  );
}