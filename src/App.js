import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  const location = useLocation();

  return (
    <div className="max-h-screen flex flex-col">
      {/* Conditionally render the Header */}
      {location.pathname !== '/' && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;