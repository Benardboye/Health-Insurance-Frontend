import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { ToastContainer } from 'react-toastify';
import { Payment } from './pages/payment/Payment';
import DataProvider from './components/context/authcontext';
import 'react-toastify/dist/ReactToastify.css';

import './scss/main.scss';
const App = () => {
  return (
    <div>
      <>
        <Router>
          <DataProvider>
            <ToastContainer />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
          </DataProvider>
        </Router>
      </>
    </div>
  );
};

export default App;
