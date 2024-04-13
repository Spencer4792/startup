import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Chat() {
    const [messages, setMessages] = useState(["Hello! What can I help you with today? Here are some options you can type:"]);
    const [input, setInput] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, `You: ${input}`]);
        simulateChatResponse(input);
        setInput('');
    };

    const simulateChatResponse = (input) => {
        setTimeout(() => {
            if (input.toLowerCase().includes("concern")) {
                setMessages(msgs => [...msgs, "Server: Could you please specify your concern?"]);
            } else if (input.toLowerCase().includes("appointment")) {
                setMessages(msgs => [...msgs, "Server: Scheduling your appointment. Please wait..."]);
            } else {
                setMessages(msgs => [...msgs, "Server: I'm not sure how to help with that, please try another query."]);
            }
        }, 1000);
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
                <section id="chat-section" className="content-section">
                    <h2>Chat with Us</h2>
                    <div id="chat-box">
                        <div id="messages" className="chat-messages">
                            {messages.map((msg, index) => (
                                <p key={index} className="chat-message">{msg}</p>
                            ))}
                        </div>
                        <input
                            type="text"
                            id="chat-message"
                            placeholder="Type your option here..."
                            className="chat-input"
                            value={input}
                            onChange={handleInput}
                            onKeyPress={event => event.key === 'Enter' && sendMessage()}
                        />
                        <button onClick={sendMessage} className="chat-send-btn">Send</button>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Pillar Constructs Co. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Chat;
