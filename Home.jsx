import React from 'react';
import './styles.css';

function Home() {
  return (
    <div>
      <header>
        {/* Navigation header */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/projects">Our Projects</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/chat">Chat</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>Building Your Future</h1>
          <p>Pillar Constructs Co. specializes in both residential and commercial construction projects...</p>
          <a href="/contact" className="cta-button">Get a Quote</a>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <div className="service-item">
            <h3>New Constructions</h3>
            <p>From ground-up projects to extensive developments, we bring your vision to life.</p>
          </div>
          <div className="service-item">
            <h3>Renovations</h3>
            <p>Upgrade or expand your space with our comprehensive renovation services.</p>
          </div>
          <div className="service-item">
            <h3>Project Management</h3>
            <p>Let us handle the complexities of project planning, coordination, and execution.</p>
          </div>
        </section>
        <section id="testimonials">
          <h2>What Our Clients Say</h2>
          <p>We haven't gotten any customers yet. But if we did have some, this is what they would say: "Loved the work. So handsome. Productive."</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Pillar Constructs Co. All rights reserved.</p>
        <a href="https://github.com/Spencer4792/startup">GitHub Repository</a>
      </footer>
    </div>
  );
}

export default Home;
