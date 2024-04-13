import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    });
    const [feedback, setFeedback] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFeedback('Registering...');
        try {
            const response = await axios.post('/api/signup', formData);
            setFeedback('User registered successfully');
            console.log(response.data);
        } catch (error) {
            console.error('Signup error:', error.response ? error.response.data : 'No response from server');
            setFeedback('Error during sign up. Please try again.');
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
                <div className="form-container">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required value={formData.phoneNumber} onChange={handleChange} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
                        <button type="submit" className="cta-button">Sign Up</button>
                        <p>{feedback}</p>
                    </form>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Pillar Constructs Co. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Signup;
