import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
    return (
        <>
            <div className="project-card" data-aos="fade-up"
                data-aos-delay={project.id * 100}>
                <img src={project.image} alt="" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-used">
                    {project.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>

                <div className="project-links">

                    <a href={project.live} target="_blank"   rel="noopener noreferrer">
                        Live Demo
                        <i className="ri-external-link-line"></i>
                    </a>

                    <a href={project.github} target="_blank"   rel="noopener noreferrer">
                        GitHub
                        <i className="ri-external-link-line"></i>
                    </a>

                </div>
            </div>
        </>
    )
}

export default ProjectCard
