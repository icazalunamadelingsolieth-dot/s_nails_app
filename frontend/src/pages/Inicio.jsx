import { useState } from 'react';
import axios from 'axios';

export default function Inicio() {
  const [form, setForm] = useState({ cliente: '', telefono: '', fecha: '', hora: '', servicio: 'Acrílicas' });

  const enviar = async (e) => { // <-- Sin el React.FormEvent
    e.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/citas', form);
    alert('¡Cita agendada!');
  };

  return (
    <form onSubmit={enviar} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h2>Agendar Cita</h2>
      <input placeholder="Cliente" required onChange={e => setForm({...form, cliente: e.target.value})} />
      <input placeholder="Teléfono" required onChange={e => setForm({...form, telefono: e.target.value})} />
      <input type="date" required onChange={e => setForm({...form, fecha: e.target.value})} />
      <input type="time" required onChange={e => setForm({...form, hora: e.target.value})} />
      <select onChange={e => setForm({...form, servicio: e.target.value})}>
        <option>Acrílicas</option>
        <option>Gelish</option>
      </select>
      <button type="submit">Confirmar</button>
    </form>
  );
}