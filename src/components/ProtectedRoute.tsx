import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    netlifyIdentity.init();

    const checkAuth = () => {
      const user = netlifyIdentity.currentUser();
      const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(!!user && storedAuth);
      setIsLoading(false);
    };

    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated');
      setIsAuthenticated(false);
      navigate('/admin');
    };

    netlifyIdentity.on('logout', handleLogout);
    netlifyIdentity.on('init', checkAuth);
    netlifyIdentity.on('login', () => {
      setIsAuthenticated(true);
      setIsLoading(false);
    });

    // Initial check
    checkAuth();

    return () => {
      netlifyIdentity.off('logout', handleLogout);
      netlifyIdentity.off('init', checkAuth);
      netlifyIdentity.off('login');
    };
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-purple/30 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-pink-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
}