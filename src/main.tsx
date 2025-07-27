import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import App from './App.tsx';
import Mission from './pages/Mission.tsx';
import ForRecruiters from './pages/ForRecruiters.tsx';
import ForAthletes from './pages/ForAthletes.tsx';
import Waitlist from './pages/Waitlist.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/for-recruiters" element={<ForRecruiters />} />
          <Route path="/for-athletes" element={<ForAthletes />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);
