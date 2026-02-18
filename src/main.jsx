import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/theme.css';
import './styles/fonts.css';
import './styles/grain.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (import.meta.env.DEV) {
  requestAnimationFrame(() => {
    const el = document.querySelector('.header-brand-dusha');
    if (el) {
      const font = getComputedStyle(el).fontFamily;
      if (!font.includes('CallFour'))
        console.warn('[dev] CallFour font may not be loaded. Check fonts.css. Got:', font);
    }
  });
}
