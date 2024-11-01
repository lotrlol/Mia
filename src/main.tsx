import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import App from './App';
import './index.css';

// Initialize Netlify Identity
netlifyIdentity.init();

// Handle login event
netlifyIdentity.on('login', user => {
  if (user) {
    localStorage.setItem('isAuthenticated', 'true');
  }
});

// Handle logout event
netlifyIdentity.on('logout', () => {
  localStorage.removeItem('isAuthenticated');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);