import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import RegistrationPage from './components/RegistrationPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'registration'>('landing');

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' ? (
        <LandingPage onNavigate={() => setCurrentPage('registration')} />
      ) : (
        <RegistrationPage onNavigate={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}

export default App;
