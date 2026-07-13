import React from 'react'
import './Projects.css'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <>
            <section id="projects" className='projects-section' data-aos="fade-up">
                <div className="projects">

                    <div className="project-header">
                        <h2>
                            <i className="ri-folder-5-fill"></i>
                            Projects
                        </h2>
                        <a href="https://github.com/codersaurabhraj" target='_blank' rel="noopener noreferrer">
                            <button>
                            View All Projects
                            <i className="ri-arrow-right-line"></i>
                        </button></a>
                    </div>

                    <div className="projects-container">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </div>

            </section>

        </>
    )
}

export default Projects
