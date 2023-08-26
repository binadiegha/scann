import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const QrScanner = lazy(() => import('./pages/qr-scanner'));
const Main = lazy(() => import('./pages/main'));

const App:React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<QrScanner />}/>
        <Route path='/qr-scanner' element={<QrScanner />}/>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
