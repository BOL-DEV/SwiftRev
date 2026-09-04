import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from './context/ThemeContext';

import PageNotFound from './lib/PageNotFound';
import AppLayout from './components/layout/AppLayout';

import Home from './pages/Home';
import OurWorks from './pages/OurWorks';
import MedicalFinance from './pages/MedicalFinance';
import HRMSDashboardPage from './pages/HRMSDashboardPage';
import HospitalOnboarding from './pages/HospitalOnboarding';
import HospitalLogin from './pages/HospitalLogin';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Routes>
            {/* Standard Corporate Portal Layout */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<OurWorks />} />
              <Route path="/hrms" element={<MedicalFinance />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />

              {/* Legacy route redirects to new structure */}
              <Route path="/medical-finance" element={<Navigate to="/hrms" replace />} />
              <Route path="/housing-solutions" element={<Navigate to="/works" replace />} />
              <Route path="/healthtech" element={<Navigate to="/hrms" replace />} />
            </Route>

            {/* Standalone Product & Operations Portals */}
            <Route path="/hrms-demo" element={<HRMSDashboardPage />} />
            <Route path="/hospital-onboarding" element={<HospitalOnboarding />} />
            <Route path="/hospital-login" element={<HospitalLogin />} />

            {/* 404 Fallback */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
