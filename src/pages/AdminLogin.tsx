import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import { Brain } from 'lucide-react';

export function AdminLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Handle login success
    const handleLogin = (user: any) => {
      if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/admin/dashboard');
      }
    };

    // Handle initialization
    const handleInit = (user: any) => {
      if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/admin/dashboard');
      }
    };

    netlifyIdentity.on('login', handleLogin);
    netlifyIdentity.on('init', handleInit);

    // Cleanup listeners
    return () => {
      netlifyIdentity.off('login', handleLogin);
      netlifyIdentity.off('init', handleInit);
    };
  }, [navigate]);

  const handleLogin = () => {
    netlifyIdentity.open('login');
  };

  return (
    <div className="min-h-screen bg-dark-purple/30 flex items-center justify-center">
      <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <Brain className="h-8 w-8 text-pink-500" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-white mb-8">Admin Login</h2>
        
        <button
          onClick={handleLogin}
          className="w-full bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2"
        >
          Login with Netlify Identity
        </button>
      </div>
    </div>
  );
}