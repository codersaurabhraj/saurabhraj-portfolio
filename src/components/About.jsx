import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-card">
        <div className="about-content">

          <h2>
            <i className="ri-user-line"></i>
            About Me
          </h2>

          <p>
            I'm a <span>Python Full Stack Developer</span> passionate about
            building responsive and scalable web applications using
            <span> React</span>, <span>Django</span>, and <span>SQL</span>.
          </p>

          <p>
            I enjoy solving real-world problems, learning new technologies,
            and creating clean, user-friendly interfaces with modern web
            development practices.
          </p>

        </div>

<button className="know-btn">
  <span className="status-dot"></span>
  Available for Full-Time Opportunities
</button>
      </div>
    </section>
  );
};

export default About;