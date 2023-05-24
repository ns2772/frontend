import React from 'react';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './routers/ProtectedRoute';

const App = () => {
  return (
    <Router>

        <Routes>
          <Route exact path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route exact path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
};

export default App;
