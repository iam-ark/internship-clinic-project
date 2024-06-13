// src/components/BookNow.js
import React, { useState } from 'react';
import './BookNow.css';

const BookNow = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        service: '',
        dateTime: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, contactNumber, email, service, dateTime } = formData;

        if (!fullName || !contactNumber || !email || !service || !dateTime) {
            alert('* fields are mandatory');
        } else {
            alert('Appointment booked successfully');
        }
    };

    return (
        <div className="book-now">
            <h1 className="title">Book an appointment</h1>
            <p className="instruction">Please fill the below form to book an appointment</p>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label>
                    Full Name *
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Contact Number *
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Enter your contact number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email *
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Service Needed *
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="General physician consultation">General physician consultation</option>
                        <option value="Pathological tests">Pathological tests</option>
                        <option value="Physiotherapy">Physiotherapy (NEW)</option>
                        <option value="Gynaecologist">Gynaecologist (NEW)</option>
                        <option value="Dermatologist">Dermatologist (NEW)</option>
                        <option value="Dentist">Dentist (NEW)</option>
                    </select>
                </label>
                <label>
                    Preferred Date and Time *
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Additional Notes
                    <textarea
                        name="notes"
                        placeholder="Enter any additional notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <p className="mandatory-fields">* fields are mandatory</p>
        </div>
    );
};

export default BookNow;
