// src/pages/Contact.js
import React, { useState } from 'react';

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
        <div>
            <h2>Contact Us</h2>
            {submitted ? (
                <p>Thank you for contacting us! We will get back to you shortly.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} required />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
