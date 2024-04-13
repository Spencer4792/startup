import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loginMessage, setLoginMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoginMessage('Logging in...');
        try {
            const response = await axios.post('/api/login', {
                email: credentials.username,
                password: credentials.password
            });
            console.log(response.data);
            setLoginMessage('Login successful!');
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : 'No response from server');
            setLoginMessage('Invalid username or password.');
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
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="username" name="username" placeholder="Username" required value={credentials.username} onChange={handleChange} />
                        <input type="password" id="password" name="password" placeholder="Password" required value={credentials.password} onChange={handleChange} />
                        <button type="submit" className="login-button">Login</button>
                        <p>{loginMessage}</p>
                    </form>
                    <p>Don't have an account? <Link to="/signup">Sign up here!</Link></p>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Pillar Constructs Co. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Login;
