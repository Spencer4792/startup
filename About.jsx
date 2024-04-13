import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

function About() {
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
        <section id="company-intro">
          <h1>About Pillar Constructs Co.</h1>
          <p>Founded in 2024, Pillar Constructs Co. has grown from a small local contractor to a leader in the construction industry. We specialize in both residential and commercial projects, delivering quality and durability in every build.</p>
        </section>
        <section id="our-mission">
          <h2>Our Mission</h2>
          <p>Our mission is to exceed client expectations through exceptional craftsmanship, sustainable practices, and a commitment to safety and innovation.</p>
        </section>
        <section id="our-team">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <img src="assets/Spencer.png" alt="Spencer Hales" />
            <h3>Spencer Hales<br />Co-Founder and CEO</h3>
            <p>The funny one. With years of experience in tech and finance, Spencer leads Pillar Constructs with the hope that we can make your dream come true at a rate you will be happy with.</p>
          </div>
          <div className="team-member">
            <img src="assets/Aaron&Kyra.png" alt="Aaron Gustaveson" />
            <h3>Aaron Gustaveson<br />Co-Founder and CEO</h3>
            <p>The serious one. With years of experience in the construction industry, alongside his insane work ethic and amazing wife, Aaron has surpassed the expectations of clients time and time again.</p>
          </div>
        </section>
        <section id="our-values">
          <h2>Our Values</h2>
          <ul>
            <li>Quality: We ensure the highest standards in every project we undertake.</li>
            <li>Safety: Prioritizing the safety of our workers and clients at every job site.</li>
            <li>Integrity: Conducting our business with honesty and transparency.</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Pillar Constructs Co. All rights reserved.</p>
        <p>Connect with us on [Insert Social Media Links]</p>
      </footer>
    </div>
  );
}

export default About;
