import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Dashboard/Home';
import PetsCustomer from './components/Dashboard/PetsCustomer'
import ServiceProvide from './components/Dashboard/ServiceProvide';

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/petsCustomer" Component={PetsCustomer} />
        <Route path="/service" Component={ServiceProvide} />
        </Routes>
      </Router>
  );
}

export default App;
