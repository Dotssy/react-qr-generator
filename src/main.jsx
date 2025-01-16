import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import QRGeneratorProvider from './context/QRGeneratorProvider.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QRGeneratorProvider>
      <App />
    </QRGeneratorProvider>
  </StrictMode>
);
