import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <main style={{ minHeight: '100vh', backgroundColor: '#0f0f0f' }}>
        <AppRouter />
      </main>
    </BrowserRouter>
  );
}