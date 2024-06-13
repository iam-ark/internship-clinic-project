// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">Quality healthcare <br /> for everyone.</h1>
            <h1 className="subtitle">Providing essential medical services to the underprivileged.</h1><br/>
            <p className="welcome-text">
            Welcome to ApexCure! We are dedicated to providing high-quality healthcare services to the underprivileged in our community. Our compassionate team of medical professionals offers comprehensive care, including general physician consultations, pathological tests, physiotherapy, gynecology, dermatology, and dental services. At ApexCure, your health and well-being are our top priorities.

We understand that navigating the healthcare system can be challenging, especially for those facing financial difficulties. Our staff is here to guide you through every step of the process, ensuring you receive the care you deserve. Additionally, we offer appointment scheduling assistance and flexible payment options to make healthcare accessible to all.  We are committed to staying up-to-date with the latest advancements in medicine and invest in ongoing education for our staff.  This ensures you receive the highest quality care possible.
            </p>
            <div className="links">
                <a href="/services">→ Checkout our services</a> <br />
                <a href="/book-now">→ Book an appointment now</a>
            </div>
        </div>
    );
}

export default Home;
