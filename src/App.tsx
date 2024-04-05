import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index.tsx';
import NotFound from './pages/not-found/index.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
