import React from "react";
import "./Footer.css";
import scrollToSection from '../utils/scrollToSection'


const Footer = () => {

  return (
    <footer className="footer-section">

      <div className="footer-card">

        {/* Top */}
        <div className="footer-wrapper">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-header">
              <div className="logo">SR</div>
              <h2>Saurabh Raj</h2>
            </div>

            <p>
              Python Full Stack Developer building modern and responsive web
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">

            <h3>Quick Links</h3>

            <div className="links-grid">
              <a href="#home">Home</a>
              <a href="#experience">Experience</a>

              <a href="#about">About</a>
              <a href="#education">Education</a>

              <a href="#skills">Skills</a>
              <a href="#certifications">Certifications</a>

              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

          </div>

          {/* Connect */}
          <div className="footer-connect">

            <h3>Connect</h3>

            <a
              href="https://github.com/codersaurabhraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <i className="ri-github-fill"></i>
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/saurabh-raj-44b580217"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="ri-linkedin-box-fill"></i>
              LinkedIn
            </a>

            <a href="mailto:saurabhraj.8511@gmail.com"
              aria-label="Email Profile"
            >
              <i className="ri-mail-fill"></i>
              Email
            </a>

            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
            >
              <i className="ri-code-box-line"></i>
              LeetCode
            </a>

          </div>
        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>© 2025 Saurabh Raj. All Rights Reserved.</p>

          <p>Made with ❤️ by Saurabh Raj</p>

          <button onClick={() => scrollToSection("nav")} className="scroll-top">
            <i className="ri-arrow-up-line"></i>
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;