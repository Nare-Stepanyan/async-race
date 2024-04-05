import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Winners from './pages/winners/index.tsx';
import Home from './pages/home/index.tsx';
import Header from './components/header/index.tsx';
import NotFound from './pages/not-found/index.tsx';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
