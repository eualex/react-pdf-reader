import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PDFReader } from './pdf.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PDFReader />
  </React.StrictMode>,
);
