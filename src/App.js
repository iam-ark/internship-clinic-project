// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import BookNow from './components/BookNow';
import AboutUs from './components/AboutUs';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/book-now" element={<BookNow />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
