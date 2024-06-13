// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1 className="title">About Us</h1>
            <p className="description">
            At ApexCure, we are committed to delivering exceptional healthcare services to the underprivileged in our community. Since our founding in 2010, we have dedicated ourselves to bridging the healthcare gap and ensuring that quality medical care is accessible to everyone, regardless of their financial situation.<br/><br/>Over the years, ApexCure has grown and evolved to meet the diverse needs of our patients. Our clinic now offers a comprehensive range of medical services, from general physician consultations and diagnostic tests to specialized care in physiotherapy, gynecology, dermatology, and dentistry. We pride ourselves on staying at the forefront of medical advancements to provide the best possible care.<br/><br/>Our team of highly skilled professionals is the heart of ApexCure. Each member of our staff is not only an expert in their field but also shares a deep-seated passion for compassionate care. We believe that treating patients with kindness, respect, and empathy is as important as the medical treatment we provide.<br/><br/>At ApexCure, we understand the unique challenges faced by the underprivileged and are committed to making healthcare accessible and affordable. We strive to create a welcoming and supportive environment where patients feel valued and cared for. Our mission is to improve the overall health and well-being of our community, one patient at a time.<br/><br/>We invite you to visit ApexCure and experience the difference that dedicated, compassionate healthcare can make. Together, we can build a healthier, stronger community.</p>
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>Phone: (555) 123-4567</p>
                <p>Email: contact@apexcureclinic.org</p>
            </div>
            <div className="visit-info">
                <h2>Visit Us</h2>
                <p>ApexCure Clinic</p>
                <p>123 Wellness Street</p>
                <p>Healthy Town, HT 56789</p>
            </div>
            <div className="social-media">
                <h2>Follow Us on Social Media</h2>
                <p>Facebook: <a href="https://facebook.com/apexcureclinic" target="_blank" rel="noopener noreferrer">facebook.com/apexcureclinic</a></p>
                <p>Twitter: <a href="https://twitter.com/apexcureclinic" target="_blank" rel="noopener noreferrer">twitter.com/apexcureclinic</a></p>
                <p>Instagram: <a href="https://instagram.com/apexcureclinic" target="_blank" rel="noopener noreferrer">instagram.com/apexcureclinic</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/company/apexcureclinic" target="_blank" rel="noopener noreferrer">linkedin.com/company/apexcureclinic</a></p>
            </div>
            <p className="note">
                *Our team is here to assist you with any inquiries or appointment bookings.
            </p>
        </div>
    );
};

export default AboutUs;
