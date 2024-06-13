// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services">
            <h1 className="title">Our Services</h1>
            <p className="welcome-text">
                General Physician Consultation<br/>
                Our compassionate general physicians provide comprehensive assessments, taking the time to understand your unique needs and medical history. We then develop personalized treatment plans to address a variety of health issues, ensuring you receive the best possible care.
                <br/><br/>

                Pathological Tests<br/>
                Our state-of-the-art laboratory offers a wide range of diagnostic tests, including blood and urine analysis, to accurately monitor your health and identify any potential concerns. We strive for fast turnaround times so you can receive your results promptly.
                <br/><br/>

                Physiotherapy (NEW)<br/>
                Our team of experienced physiotherapists creates personalized therapy plans to help you recover from injuries, manage pain effectively, and improve your overall mobility. We utilize a combination of manual therapy techniques and therapeutic exercises to achieve optimal results.
                <br/><br/>

                Gynecology (NEW)<br/>
                We offer a welcoming environment for women's healthcare. Our dedicated gynecologists provide routine check-ups, preventive care, and address any specific concerns you may have. We are committed to empowering women to take charge of their health and well-being.
                <br/><br/>

                Dermatology (NEW)<br/>
                Our board-certified dermatologists utilize the latest advancements in diagnosis and treatment to address a wide range of skin conditions. We offer personalized care plans that may include topical medications, light therapy, or other innovative solutions to restore your skin's health and appearance.
                <br/><br/>

                Dentistry (NEW)<br/>
                Our friendly and skilled dentists prioritize preventive care, offering routine cleanings, fillings, and sealants to maintain healthy smiles. We also address dental emergencies and provide a variety of treatment options to restore your oral health and confidence.
            </p>
        </div>
    );
}

export default Services;
