import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DetailedHowItWorks } from './pages/DetailedHowItWorks';
import { AboutPage } from './pages/AboutPage';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen bg-[#0a051c]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<DetailedHowItWorks />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;