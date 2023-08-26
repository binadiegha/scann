import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import './output.css'
import Entry from './app.styles';

const QrScanner = lazy(() => import('./pages/qr-scanner'));
const Main = lazy(() => import('./pages/main'));

const App:React.FC = () => {
  return (
 <Entry>
     <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/qr-scanner' element={<QrScanner/>}/>
      </Routes>
      </Suspense>
    </Router>
 </Entry>
  );
}

export default App;
