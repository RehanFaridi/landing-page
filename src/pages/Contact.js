// src/pages/Contact.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className='center'>
            <Header />
            <Navbar />
            <div className='contact'>
            <h2>Contact Us</h2>
            {submitted ? (
                <p>Thank you for contacting us! We will get back to you shortly.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label><br/><br />
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label><br/><br />
                        <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} required />
                        </label><br/><br />
                        <button type="submit">Submit</button>
                        <br/><br />

                </form>
            )}
            </div>
        </div>
    );
};

export default Contact;
