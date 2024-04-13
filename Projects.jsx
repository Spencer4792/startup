import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Projects() {
    const [searchQuery, setSearchQuery] = useState('');
    const [projects, setProjects] = useState(mockProjects);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchQuery)
    );

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
                <input 
                    type="text" 
                    id="search-input" 
                    placeholder="Search projects..." 
                    style={{ margin: '20px', padding: '10px', width: 'calc(100% - 40px)' }} 
                    onChange={handleSearch}
                    value={searchQuery}
                />

                <section id="project-list">
                    <h1>Featured Projects</h1>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project">
                            <img src={project.imageUrl} alt={project.name} className="project-image" />
                            <h2>{project.name}</h2>
                            <p><strong>Completion Date:</strong> {project.completionDate}</p>
                            <p><strong>Location:</strong> {project.location}</p>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Pillar Constructs Co. All rights reserved.</p>
            </footer>
        </div>
    );
}

const mockProjects = [
    { id: 1, name: "Luxury Residential Complex", completionDate: "2024-03-15", location: "Texas, of Course", description: "A state-of-the-art residential complex featuring modern amenities, sustainable construction practices, and breathtaking city views.", imageUrl: "assets/luxurytier.jpeg" },
    { id: 2, name: "Nice Residential Complex", completionDate: "2024-03-15", location: "Somewhere in Utah", description: "A beautiful residential complex that has bright lights and scenic vistas.", imageUrl: "assets/reallyNice.jpeg" },
    { id: 3, name: "Somewhat Luxury Residential Complex", completionDate: "2024-03-15", location: "New York", description: "Very reasonable luxury residential complex, adequate swimming pool size.", imageUrl: "assets/somewhatLuxury.jpeg" },
    { id: 4, name: "Middle-Tier Residential Complex", completionDate: "2024-03-15", location: "Orange County California", description: "I mean, are you sure that you want this one?", imageUrl: "assets/decentApartment.jpeg" },
    { id: 5, name: "Crappy Residential Complex", completionDate: "2023-12-14", location: "Detroit", description: "This ain't our finest work.", imageUrl: "assets/crappyApartment.jpeg" }
];

export default Projects;
