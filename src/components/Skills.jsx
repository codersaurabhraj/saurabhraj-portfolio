import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skill-section" data-aos="zoom-in" >

      <div className="skills-container" >
        <div className="skills-header">
          <i className="ri-code-s-slash-line"></i>
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skills-list">

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                <span>HTML5</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
                <span>CSS3</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                <span>React</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                <span>Bootstrap</span>
              </div>

              <div className="skill-item">
                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" />
                <span>Tailwind</span>
              </div>

            </div>
          </div>

          {/* Backend */}

          <div className="skill-card">
            <h3>Backend</h3>

            <div className="skills-list">

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="" />
                <span>Python</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="" />
                <span>Django</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" alt="" />
                <span>REST API</span>
              </div>

            </div>
          </div>

          {/* Database */}

          <div className="skill-card">
            <h3>Database</h3>

            <div className="skills-list">

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="" />
                <span>MySQL</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png" alt="" />
                <span>SQL</span>
              </div>

            </div>

          </div>

          {/* Tools */}

          <div className="skill-card">
            <h3>Tools</h3>

            <div className="skills-list">

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
                <span>Git</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn.simpleicons.org/github/ffffff" alt="" />
                <span>GitHub</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="" />
                <span>VS Code</span>
              </div>

              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" alt="" />
                <span>PyCharm</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;