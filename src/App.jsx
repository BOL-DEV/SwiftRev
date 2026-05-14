import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import MedicalFinance from './pages/MedicalFinance';
import HousingSolutions from './pages/HousingSolutions';
import About from './pages/About';
import Contact from './pages/Contact';
import HospitalLogin from './pages/HospitalLogin';
import HospitalOnboarding from './pages/HospitalOnboarding';
import Careers from './pages/Careers';
import HealthTech from './pages/HealthTech';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/medical-finance" element={<MedicalFinance />} />
            <Route path="/housing-solutions" element={<HousingSolutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hospital-login" element={<HospitalLogin />} />
            <Route path="/hospital-onboarding" element={<HospitalOnboarding />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/healthtech" element={<HealthTech />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
