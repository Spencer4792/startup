import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitStatus('Sending...');

        try {
            const response = await axios.post('/api/contact', formData);
            console.log(response.data);
            alert('Message sent successfully!');
            setSubmitStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send message:', error);
            setSubmitStatus('Failed to send message.');
            alert('Failed to send message.');
        }
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/projects">Our Projects</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="contact-info">
                    <h1>Contact Us</h1>
                    <p>For any inquiries, quotes, or feedback, please fill out the form below or reach out through our contact details.</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> pillarcontstructs@gmail.com</p>
                        <p><strong>Phone:</strong> (801) 669 - 4082</p>
                        <p><strong>Address:</strong> 616 Cedar Drive, Cedar Hills, UT</p>
                    </div>
                </section>
                
                <section id="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>
                        
                        <button type="submit" className="cta-button">Send Message</button>
                    </form>
                    {submitStatus && <p>{submitStatus}</p>}
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Pillar Constructs Co. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;
