import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Services() {
    const [visibleSection, setVisibleSection] = useState('');

    const toggleDescription = (section) => {
        setVisibleSection(visibleSection === section ? '' : section);
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
                {serviceDetails.map(service => (
                    <section className="service-detail" key={service.id}>
                        <div className="service-box">
                            <img src={service.imgSrc} alt={service.title} />
                            <div className="service-text">
                                <h2 onClick={() => toggleDescription(service.id)}>
                                    {service.title} <span className="toggle-indicator">{visibleSection === service.id ? '-' : '+'}</span>
                                </h2>
                                <p style={{ display: visibleSection === service.id ? 'block' : 'none' }}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </section>
                ))}
            </main>
            <footer>
                <p>&copy; 2024 Pillar Constructs Co. All rights reserved.</p>
            </footer>
        </div>
    );
}

const serviceDetails = [
    {
        id: 'ComprehensiveDesc',
        title: 'Comprehensive Construction Services',
        description: 'At Pillar Constructs Co., we offer a wide range of construction services tailored to meet the diverse needs of our clients. From groundbreaking initial designs to the final touches of paint, our dedicated team ensures quality, durability, and satisfaction in every project we undertake. With a focus on innovation, sustainability, and efficiency, we are committed to building not just structures, but lasting relationships with our clients.',
        imgSrc: 'assets/ShakingHands.png'
    },
    {
        id: 'constructionDesc',
        title: 'New Constructions',
        description: 'Our new construction services are designed to turn your vision into reality...',
        imgSrc: 'assets/Construction.png'
    },
    {
        id: 'renovationDesc',
        title: 'Renovations',
        description: 'Transform your existing space into something extraordinary with our specialized renovation services...',
        imgSrc: 'assets/Renovations.png'
    },
    {
        id: 'managementDesc',
        title: 'Project Management',
        description: 'Leave the complexities of project management to us. Our comprehensive project management services ensure that your construction projects are completed on time, within budget, and according to your exact specifications. From initial planning and permits to construction and final inspection, we provide seamless coordination and communication, keeping you informed and involved every step of the way.',
        imgSrc: 'assets/Blueprints.png'
    },
    {
        id: 'sustainableDesc',
        title: 'Sustainable Practices',
        description: 'We are dedicated to promoting sustainability in the construction industry. By utilizing green building materials, energy-efficient designs, and environmentally friendly practices, we aim to reduce the environmental impact of our projects. Our commitment to sustainability not only benefits the planet but also enhances the health and well-being of the occupants and the community at large.',
        imgSrc: 'assets/GreenEnergy.png'
    },
    {
        id: 'designDesc',
        title: 'Custom Design Services',
        description: 'Every dream project is unique, and our custom design services are here to bring yours to life. With a keen eye for detail and a deep understanding of architectural principles, our design team collaborates with you to create personalized solutions that reflect your style, needs, and aspirations. Let’s build something remarkable together.',
        imgSrc: 'assets/InteriorDesign.png'
    }
];

export default Services;
